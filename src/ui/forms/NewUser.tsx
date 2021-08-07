import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../stylesheets/adduserform.css';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { addUser } from '../../redux/userSlice';
import _uniqueId from 'lodash/uniqueId';
import { useAppDispatch } from '../../redux/hooks';

type FormValues = {
  id: number;
  first_name: string;
  last_name: string;
  middle_initial: string;
  email: string;
  active: boolean;
  district: number;
  verified: boolean;
  created_at: string;
};

const NewUserForm: React.FC = (props: any) => {
  const [id] = useState(_uniqueId('prefix-'));
  const d = new Date();
  const curr_date = d.getDate();
  const curr_month = d.getMonth() + 1; //Months are zero based
  const curr_year = d.getFullYear();
  const curr_hour = d.getHours() + ':';
  const curr_min = d.getMinutes() + ':';
  const curr_sec = d.getSeconds();
  const date = `${curr_year}-${curr_month}-${curr_date}${' '}${curr_hour}${curr_min}${curr_sec}`;
  console.log(date);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formValues, setFormValues] = useState({
    id: id,
    first_name: '',
    last_name: '',
    middle_initial: '',
    email: '',
    active: true,
    district: 0,
    verified: true,
    created_at: date,
  });
  console.log('ohyeah', formValues);

  return (
    <Form
      className='adduser__form'
      onSubmit={handleSubmit((data) => {
        setFormValues(data);
        dispatch(addUser(formValues));
      })}
    >
      <h1>Add User</h1>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          as='input'
          {...register('first_name', { required: 'First name required' })}
        />
        {errors.first_name && <p>{errors.first_name.message}</p>}
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          as='input'
          {...register('last_name', { required: true })}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Middle Initial</Form.Label>
        <Form.Control
          as='input'
          {...register('middle_initial', { maxLength: 1 })}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Email</Form.Label>
        <Form.Control as='input' {...register('email', { required: true })} />
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
      <Form.Check type='checkbox' {...register('active', { required: true })} />
      <Button variant='primary' onClick={handleShow} type='submit'>
        Submit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Added!</Modal.Title>
        </Modal.Header>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    props: state.users.users,
  };
};

export default connect(mapStateToProps)(NewUserForm);
