import { Grid } from '@mui/material'
import React from 'react'
import { iconBuild, iconCV, iconDownload } from '../../assets/images'

import "../../assets/css/style.css";

const Introduction = () => {
  return (
    <Grid container style={{ marginTop:"70px" }} sx={{ minHeight: '100vh' }}>
        <h1 className='text-center'>BUILDING A PERFECT RESUME HAS NEVER BEEN THIS EASY!</h1>
        <div class="row builder-steps">
          <div class="col-md-4 col-xxs-4">
            <div class="builder-step">
              <span class="builder-step__number">1</span>
              <div class="builder-step__icon"><img src={iconBuild} /></div>
              <span class="builder-step__text">Choose a professional<br/> resume template</span>
            </div>
          </div>

          <div class="col-md-4 col-xxs-4">
            <div class="builder-step">
              <span class="builder-step__number">2</span>
              <div class="builder-step__icon"><img src={iconCV} sx={{ width: 200, height: 200 }} /></div>
              <span class="builder-step__text">Build your resume using our pre-written examples </span>
            </div>
          </div>

          <div class="col-md-4 col-xxs-4">
            <div class="builder-step">
              <span class="builder-step__number">3</span>
              <div class="builder-step__icon"><img src={iconDownload} /></div>
              <span class="builder-step__text">Download your resume and start impressing employers</span>
            </div>
          </div>
        </div>
    </Grid>
  )
}

export default Introduction