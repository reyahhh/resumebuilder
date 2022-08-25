import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../contexts/AuthContext";

const Header = () => {
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
    <AppBar container color="secondary">
      <Toolbar>
        <Link
          href="/"
          variant="h6"
          color="primary"
          underline="none"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Resume Builder
        </Link>
          {user && <Button onClick={handleLogout} className='border px-6 py-2 my-4'>
              Sign out
            </Button>} 

          {!user &&  <Button href="/signin" variant="outlined" sx={{ my: 1, mx: 1.5 }}>Sign In</Button>}
        
        <Button
          href="/introduction"
          variant="contained"
          sx={{ my: 1, mx: 1.5 }}
        >
          Build resume
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
