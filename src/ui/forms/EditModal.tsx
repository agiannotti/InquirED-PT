import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { FormValues } from '../../types/types';
import { editUser } from '../../redux/userSlice';
import { connect } from 'react-redux';

const EditModal = (props: any) => {
  const onSubmit = (data) => {
    props.editUser(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({ mode: 'onChange' });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant='primary'
        // disabled={!isDirty || !isValid}
        onClick={handleShow}
      >
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='adduser__form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Edit User</h1>
            {/* <Form.Group controlId='_id' className='mb-3'>
              <Form.Control
                as='input'
                type='hidden'
                value={id}
                {...register('id')}
              />
            </Form.Group> */}
            {/* <Form.Group className='mb-3' controlId='_date'>
              <Form.Control
                as='input'
                type='hidden'
                value={date}
                {...register('created_at')}
              />
            </Form.Group> */}
            <Form.Group controlId='verified' className='mb-3'>
              <Form.Control
                as='input'
                type='hidden'
                value='false'
                {...register('verified')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='_first_name'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                as='input'
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
                {...register('middle_initial', {
                  maxLength: 1,
                })}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                as='input'
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className='err_msg'>{errors.email.message}</p>
              )}
            </Form.Group>
            <Form.Group controlId='select'>
              <Form.Label>District</Form.Label>
              <Form.Select
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
              <Form.Check type='checkbox' {...register('active')} />
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
