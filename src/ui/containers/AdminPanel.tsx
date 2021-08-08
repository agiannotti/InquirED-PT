import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUsers, selectUsers } from '../../redux/userSlice';
import UserTable from '../components/UserTable';
import Filter from '../components/Filter';
import { connect } from 'react-redux';
import { UserData } from '../../types/types';
import NewUserForm from '../forms/NewUser';
import '../stylesheets/main.css';

//eslint-disable-next-line
const AdminPanel = ({ users }: any) => {
  const [districtInput, setDistrictInput] = useState<number>(0);
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selected = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleChangeDistrict = (evt) => {
    const input: number = evt.target.value;
    handleFilterByDistrict(input);
  };

  const handleFilterByDistrict = (input: number) => {
    setDistrictInput(input);
    const filtered = selected.users.filter((user) => {
      return user.district === Number(input);
    });
    setFilteredUsers(filtered);
  };

  const handleChangeCheckbox = () => {
    setIsChecked(!isChecked);
    const filtered = selected.users.filter((user) => {
      return user.active == isChecked;
    });
    setFilteredUsers(filtered);
  };

  const usersToDisplay =
    Number(districtInput) === 0 && !isChecked ? users : filteredUsers;

  return (
    <div className='app-admin-panel container'>
      <div className='col'>
        <div className='filterbox'>
          <Filter
            handleChangeDistrict={handleChangeDistrict}
            districtInput={districtInput}
            handleChangeCheckbox={handleChangeCheckbox}
            isChecked={isChecked}
          />
          <NewUserForm />
        </div>
        <div className='usertablebox'>
          <UserTable users={usersToDisplay} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(AdminPanel);
