import {
  Box,
  Grid,
  InputLabel,
  Input,
  FormControl,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const handleSubmit = () => {};

const PersonalInfo = () => {
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
            <Typography variant="h4">COMPLETE YOUR RESUME HEADING</Typography>
            <Typography variant="h6">
              Employers will use this information to contact you.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="firstname">First name</InputLabel>
              <Input id="firstname" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="lastname">Last name</InputLabel>
              <Input id="lastname" fullWidth="true" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" fullWidth="true" />
            </FormControl>
          </Grid>

           <Grid item xs={12}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="address">Address</InputLabel>
              <Input id="address" multiline minRows={2} />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="city">City</InputLabel>
              <Input id="city" fullWidth="true" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="zip_code">ZIP code</InputLabel>
              <Input id="zip_code" fullWidth="true" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl xs={12} fullWidth="true">
              <InputLabel htmlFor="phone_number">Phone Number</InputLabel>
              <Input id="phone_number" fullWidth="true" />
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

export default PersonalInfo;
