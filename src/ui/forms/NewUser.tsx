import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../stylesheets/adduserform.css';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { addUser } from '../../redux/userSlice';
import _uniqueId from 'lodash/uniqueId';
import { FormValues } from '../../types/types';

//eslint-disable-next-line
const NewUserForm = (props: any) => {
  const [id] = useState(_uniqueId('new_'));
  const d = new Date();
  const curr_date = d.getDate();
  const curr_month = d.getMonth() + 1;
  const curr_year = d.getFullYear();
  const curr_hour = d.getHours() + ':';
  const curr_min = d.getMinutes() + ':';
  const curr_sec = d.getSeconds();
  const date = `${curr_year}-${curr_month}-${curr_date}${' '}${curr_hour}${curr_min}${curr_sec}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    props.addUser(data);
  };

  return (
    <Form className='adduser__form' onSubmit={handleSubmit(onSubmit)}>
      <h1>Add User</h1>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Control as='input' type='hidden' value={id} {...register('id')} />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Control
          as='input'
          type='hidden'
          value={date}
          {...register('created_at')}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Control
          as='input'
          type='hidden'
          value='false'
          {...register('verified')}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
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
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          as='input'
          {...register('last_name', {
            required: 'Last name is required',
            validate: (value) => value.length > 3,
          })}
        />
        {errors.last_name && (
          <p className='err_msg'>{errors.last_name.message}</p>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Middle Initial</Form.Label>
        <Form.Control
          as='input'
          {...register('middle_initial', {
            maxLength: 1,
          })}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          as='input'
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className='err_msg'>{errors.email.message}</p>}
      </Form.Group>
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
      <Form.Label>Is this user Active?</Form.Label>
      <Form.Check type='checkbox' {...register('active')} />
      <Button variant='primary' onClick={handleShow} type='submit'>
        Submit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Added</Modal.Title>
        </Modal.Header>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (event) => dispatch(addUser(event)),
});

const mapStateToProps = (state) => {
  return {
    props: state.users.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
