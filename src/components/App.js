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

const App = () => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <AuthContextProvider>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInSide />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
