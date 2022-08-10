import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={SignInSide} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
