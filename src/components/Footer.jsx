import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

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
  return <div><Copyright sx={{ mt: 5 }} /></div>;
};

export default Footer;
