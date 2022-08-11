import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import Header from "./Header";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./CustomTheme";

const App = () => {

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

  return (
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
          <Copyright sx={{ mt: 5 }} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
