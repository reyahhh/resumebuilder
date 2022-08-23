import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DoneIcon from '@mui/icons-material/Done';

import { heroImg } from '../../assets/images';

import "../../assets/css/style.css";
import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <h1 className="hero__heading">
            Impressive resumes
            <span className="heading-extra">Easy online builder</span>
          </h1>
          <ul className="hero__list">
            <li>
              <DoneIcon />{" "}
              Professional out-of-the-box resumes, instantly generated by the
              most advanced resume builder technology available.
            </li>
            <li>
              <DoneIcon />{" "}
              Effortless crafting. Real-time preview &amp; pre-written resume
              examples. Dozens of HR-approved resume templates.
            </li>
            <li>
              <DoneIcon />{" "}
              Land your dream job with the perfect resume employers are looking
              for!
            </li>
          </ul>

          <Button
          href="/introduction"
          variant="contained"
          sx={{ my: 1, mx: 1.5 }}
          size="large">
          Build My Resume</Button>
        </Box>
      </Grid>

      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage: `url(${heroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
}
