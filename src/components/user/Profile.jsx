import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
    <Grid>
    <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </Grid>
    </>
  );
};

export default Profile;