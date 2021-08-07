import React from 'react';
import { Users } from '../../types/types';
import '../stylesheets/usertable.css';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { removeUser } from '../../redux/userSlice';

const UserTable: React.FC<Users> = ({ users }: Users) => {
  const tableRows = users.map((user) => (
    <tr key={user.id}>
      <td>
        {user.last_name}, {user.first_name} {user.middle_initial}
      </td>
      <td>{user.email}</td>
      <td>{user.district}</td>
      <td>{user.created_at}</td>
      <td>
        <Button>Edit</Button>
        <Button>Delete</Button>
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
});

const mapStateToProps = (state) => {
  return {
    props: state.users.users,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
