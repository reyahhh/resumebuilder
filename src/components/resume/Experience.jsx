import {
  Box,
  Grid,
  InputLabel,
  Input,
  FormControl,
  Typography,
  TextField,
  Button,
  TextareaAutosize
} from "@mui/material";
import React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const handleSubmit = (e) => {
  e.preventDefault();
};

const Experience = () => {
  const [sDate, setSDate] = React.useState(null);
  const [eDate, setEDate] = React.useState(null);

  return (
    <Box
      sx={{
        marginTop: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "550px",
      }}
    >
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mx: 4,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">EXPERIENCE</Typography>
            <Typography variant="h6">
              List your work experience, from the most recent to the oldest.
              Feel free to use our pre-written examples.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="employer">Employer</InputLabel>
              <Input id="employer" name="employer" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="job_title">Job Title</InputLabel>
              <Input id="job_title" name="job_title" fullWidth="true" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="city">City</InputLabel>
              <Input id="city" fullWidth="true" />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl xs={12} fullWidth="true">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start Date"
                  value={sDate}
                  name="sDate"
                  onChange={(newValue) => {
                    setSDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl xs={12} fullWidth="true">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="End Date"
                  value={eDate}
                  name="eDate"
                  onChange={(newValue) => {
                    setEDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl xs={12} fullWidth="true">
              <TextareaAutosize
                aria-label="job description"
                minRows={3}
                fullWidth="true"
                placeholder="Job Description"
                
              />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save & Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Experience;
