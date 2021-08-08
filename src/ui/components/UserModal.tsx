import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export const UserModal = (props: any) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { message } = props;
  return (
    <>
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
    </>
  );
};
