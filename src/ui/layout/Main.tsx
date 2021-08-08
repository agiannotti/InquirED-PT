import React, { FC } from 'react';
import AdminPanel from '../containers/AdminPanel';
import '../stylesheets/main.css';

const Main: FC = () => {
  return (
    <div className='app-main'>
      <AdminPanel />
    </div>
  );
};

export default Main;
