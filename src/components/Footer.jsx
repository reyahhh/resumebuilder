import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Footer = () => {
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="custom.light"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          Reyia
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <Grid container bgcolor="primary.main">
      <Grid xs={12}>
        <Copyright sx={{ my: 5 }} />
      </Grid>
  </Grid>
  );
};

export default Footer;
