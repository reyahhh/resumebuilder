import { Box, Grid } from "@mui/material";
import React from "react";
import { iconBuild, iconChoose, iconDownload } from "../../assets/images";

import "../../assets/css/style.css";

const Introduction = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: "550px", marginTop: '70px' }}>
      <Grid className="builder-steps" container spacing={2} columns={12}>
        <Grid xs={6} md={12} my={4} sx={{ display: "flex",
            flexDirection: "column",
            alignItems: "center" }}>
          <h1 className="text-center">
            BUILDING A PERFECT RESUME HAS NEVER BEEN THIS EASY!
          </h1>
        </Grid>
        <Grid xs={6} md={4}>
          <div class="builder-step">
            <span class="builder-step__number">1</span>
            <div class="builder-step__icon">
                <img src={iconChoose} alt="build resume" />
            </div>
            <span class="builder-step__text">
                Choose a professional
                <br /> resume template
            </span>
          </div>
        </Grid>

        <Grid xs={6} md={4}>
          <div class="builder-step">
            <span class="builder-step__number">2</span>
            <div class="builder-step__icon">
                <img src={iconBuild} alt="build resume" />
            </div>
            <span class="builder-step__text">
              Build your resume using our pre-written examples{" "}
            </span>
          </div>
        </Grid>

        <Grid xs={6} md={4}>
          <div class="builder-step">
            <span class="builder-step__number">3</span>
            <div class="builder-step__icon">
              <img src={iconDownload} alt="download resume" />
            </div>
            <span class="builder-step__text">
              Download your resume and start impressing employers
            </span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
