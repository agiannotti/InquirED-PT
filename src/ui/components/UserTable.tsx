import React, { FC } from 'react';
import { Users } from '../../types/types';
import '../stylesheets/usertable.css';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { removeUser, editUser } from '../../redux/userSlice';
import EditModal from '../forms/EditModal';

const UserTable: FC<Users> = (props: any) => {
  const { users } = props;
  const handleEdit = (evt) => {
    editUser(evt.target.value);
  };

  const handleDelete = (evt) => {
    props.removeUser(evt.target.value);
  };

  const tableRows = users.map((user) => {
    const {
      id,
      last_name,
      first_name,
      email,
      middle_initial,
      district,
      created_at,
    } = user;

    return (
      <tr key={id}>
        <td>
          {last_name}, {first_name} {middle_initial}
        </td>
        <td>{email}</td>
        <td>{district}</td>
        <td>{created_at}</td>
        <td>
          {/* <Button variant='primary' onClick={handleEdit} value={id}>
            Edit
          </Button> */}
          <EditModal value={id} />

          <Button onClick={handleDelete} value={id}>
            Delete
          </Button>
        </td>
      </tr>
    );
  });

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
