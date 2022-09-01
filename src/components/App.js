import React from "react";
import { Routes, Route } from "react-router-dom";
import { Profile, SignInSide, SignUp } from "./user";
import HomePage from "./homepage/HomePage";
import Header from "./Header";

import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./CustomTheme";
import Footer from "./Footer";
import { AuthContextProvider } from "../contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { CssBaseline, Grid } from "@mui/material";
import Introduction from "./guides/Introduction";
import PersonalInfo from "./resume/PersonalInfo";
import Education from "./resume/Education";
import Skills from "./resume/Skills";
import Experience from "./resume/Experience";

import { Provider } from "react-redux";

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={CustomTheme}>
        <AuthContextProvider>
          <CssBaseline />
          <Grid container component="main">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignInSide />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/introduction" element={<Introduction />} />

              <Route path="/personal_infos" element={<PersonalInfo />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </Grid>
        </AuthContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
