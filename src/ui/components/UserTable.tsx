import React from 'react';
import { Users } from '../../types/types';
import '../stylesheets/usertable.css';
import Button from 'react-bootstrap/Button';

const UserTable: React.FC<Users> = ({ users }: Users) => {
  // const [userTable, setUserTable] = React.useState<UserData[] | []>([]);

  React.useEffect(() => {
    console.log(users, 'USERS IN TABLE');
  }, [users]);

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

export default UserTable;
