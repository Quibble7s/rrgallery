import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AuthLogin from "../pages/AuthLogin";
import AuthRegister from "../pages/AuthRegister";

const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path='/auth/login' component={AuthLogin} />
        <Route exact path='/auth/register' component={AuthRegister} />
        <Redirect to='/auth/login' />
      </Switch>
    </>
  );
};

export default AuthRouter;
