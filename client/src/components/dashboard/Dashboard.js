import React from 'react';
import TextPostForm from '../posts/types/create/TextPostForm';
import Logout from '../auth/Logout';

const Dashboard = () => {

  return (
    <div
      className='dashboard'
    >
      <Logout />
      <TextPostForm
        textPostActive={true}
      />
    </div>
  )
}

export default Dashboard;