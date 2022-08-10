import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="secondary"
      elevation={0}
      sx={{ boxShadow: 1  }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
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
        <nav></nav>
        <Button href="/signin" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Sign in
        </Button>
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
