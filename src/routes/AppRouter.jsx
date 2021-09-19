import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useOnSignedIn } from "../hooks/useOnSignedIn";
import AuthLogin from "../pages/AuthLogin";
import AuthRegister from "../pages/AuthRegister";

import "../sass/components/container/container.scss";

const AppRouter = () => {
  const loged = useOnSignedIn();
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/login'
          component={() => (!loged ? <AuthLogin /> : <Redirect to='/' />)}
        />
        <Route
          exact
          path='/register'
          component={() => (!loged ? <AuthRegister /> : <Redirect to='/' />)}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
