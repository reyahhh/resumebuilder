import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { SignInSide, SignUp } from "./user";
import HomePage from "./homepage/HomePage";
import Header from "./Header";

import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./CustomTheme";
import Footer from "./Footer";
import { AuthProvider } from "../contexts/AuthContext";



const App = () => {

  return (
    <AuthProvider>
      <ThemeProvider theme={CustomTheme}>
        <Header />
        <div className="main">
          <Router history={history}>
            <div>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/signin" exact component={SignInSide} />
                <Route path="/signup" exact component={SignUp} />
              </Switch>
            </div>
          </Router>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
