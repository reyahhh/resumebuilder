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
import { useState } from "react";

const handleSubmit = () => {};

const Skills = () => {
  const [inputFields, setInputFields] = useState([{ skill: "", rating: "" }]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = { skill: "", rating: "" };

    setInputFields([...inputFields, newfield]);
  };
  
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
            <Typography variant="h4">SKILLS</Typography>
            <Typography variant="h6">List all your related skills.</Typography>
          </Grid>

          {inputFields.map((input, index) => {
            return (
              <div key={index}>
                <Grid item xs={4}>
                  <FormControl xs={12} fullWidth="true">
                    <InputLabel htmlFor="skill">Skill</InputLabel>
                    <Input
                      name="skill"
                      placeholder="Skill"
                      value={input.skill}
                      id="skill"
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl xs={12} fullWidth="true">
                    <InputLabel htmlFor="rating">rating</InputLabel>
                    <Input
                      name="rating"
                      placeholder="rating"
                      value={input.rating}
                      id="rating"
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </FormControl>
                </Grid>
              </div>
            );
          })}

          <Grid item xs={4}>
            <button onClick={addFields}>Add More..</button>
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

export default Skills;
