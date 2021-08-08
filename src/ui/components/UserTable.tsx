import React, { FC, useState } from 'react';
import { Users } from '../../types/types';
import '../stylesheets/usertable.css';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { removeUser, editUser } from '../../redux/userSlice';
import Modal from 'react-bootstrap/Modal';
const UserTable: FC<Users> = (props: any) => {
  const { users } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleEdit = (evt) => {
    setShow(true);
    editUser(evt.target.value);
  };

  const EditModal = (evt: any) => {
    console.log('modal', evt);
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal>
      </>
    );
  };

  const handleDelete = (evt) => {
    console.log(evt);
    props.removeUser(evt.target.value);
  };

  const tableRows = users.map((user) => (
    <tr key={user.id}>
      <td>
        {user.last_name}, {user.first_name} {user.middle_initial}
      </td>
      <td>{user.email}</td>
      <td>{user.district}</td>
      <td>{user.created_at}</td>
      <td>
        <Button variant='primary' onClick={handleEdit} value={user.id}>
          Edit
        </Button>

        <Button onClick={handleDelete} value={user.id}>
          Delete
        </Button>
      </td>
    </tr>
  ));

  const tableHeader = (
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>District</th>
      <th>Date Registered</th>
      <th></th>
    </tr>
  );

  return (
    <table className='usertable'>
      <thead>{tableHeader}</thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeUser: (event) => dispatch(removeUser(event)),
  editUser: (event) => dispatch(editUser(event)),
});

const mapStateToProps = (state) => {
  return {
    props: state.users.users,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
