import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { FormValues } from '../../types/types';
import { editUser } from '../../redux/userSlice';
import { connect } from 'react-redux';
import { Users } from '../../types/types';

const EditModal = (props: any) => {
  const [userById, setUserById] = useState<any>([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setUserById(props.props.filter((user) => user.id == props.value));
  }, []);

  const handleShow = () => {
    setShow(true);
    console.log(userById);
  };

  const onSubmit = (props) => {
    editUser(props);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({ mode: 'onChange' });
  return (
    <>
      <Button variant='primary' onClick={handleShow} value={props}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form className='adduser__form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Edit User</h1>
            <Form.Group controlId='_id' className='mb-3'>
              <Form.Control
                as='input'
                type='hidden'
                value={userById[0].id}
                {...register('id')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='_date'>
              <Form.Control
                as='input'
                type='hidden'
                value={userById[0].date}
                {...register('created_at')}
              />
            </Form.Group>
            <Form.Group controlId='verified' className='mb-3'>
              <Form.Control
                as='input'
                type='hidden'
                value={userById[0].verified}
                {...register('verified')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='_first_name'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                as='input'
                placeholder={userById[0].first_name}
                {...register('first_name', {
                  required: 'First name is required',
                })}
              />
              {errors.first_name && (
                <p className='err_msg'>{errors.first_name.message}</p>
              )}
            </Form.Group>
            <Form.Group className='mb-3' controlId='last_name'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                as='input'
                placeholder={userById[0].last_name}
                {...register('last_name', {
                  required: 'Last name is required',
                })}
              />
              {errors.last_name && (
                <p className='err_msg'>{errors.last_name.message}</p>
              )}
            </Form.Group>
            <Form.Group className='mb-3' controlId='middle_initial'>
              <Form.Label>Middle Initial</Form.Label>
              <Form.Control
                as='input'
                placeholder={userById[0].middle_initial}
                {...register('middle_initial', {
                  maxLength: 1,
                })}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                as='input'
                placeholder={userById[0].email}
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className='err_msg'>{errors.email.message}</p>
              )}
            </Form.Group>
            <Form.Group controlId='select'>
              <Form.Label>District</Form.Label>
              <Form.Select
                defaultValue={userById[0].district}
                aria-label='Default select example'
                {...register('district', { valueAsNumber: true })}
              >
                <option value='1'>District 1</option>
                <option value='2'>District 2</option>
                <option value='3'>District 3</option>
                <option value='4'>District 4</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='checkbox'>
              <Form.Label>Is this user Active?</Form.Label>
              <Form.Check
                type='checkbox'
                value={userById[0].active}
                {...register('active')}
              />
            </Form.Group>
          </Form>
          <Button
            variant='primary'
            disabled={!isDirty || !isValid}
            onClick={handleShow}
            type='submit'
          >
            Submit
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editUser: (event) => dispatch(editUser(event)),
});

const mapStateToProps = (state) => {
  return {
    props: state.users.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
