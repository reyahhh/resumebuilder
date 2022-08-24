import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Footer = () => {
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
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
    <Grid fullWidth>
      <Copyright sx={{ mt: 5 }} />
    </Grid>
  );
};

export default Footer;
