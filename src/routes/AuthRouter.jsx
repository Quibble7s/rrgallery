import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import AuthLogin from "../pages/AuthLogin";
import AuthRegister from "../pages/AuthRegister";

const AuthRouter = () => {
  const { auth } = useSelector((state) => state);
  return (
    <>
      <Switch>
        <Route
          path='/auth/login'
          component={() => (!auth.loged ? <AuthLogin /> : <Redirect to='/' />)}
        />
        <Route
          path='/auth/register'
          component={() =>
            !auth.loged ? <AuthRegister /> : <Redirect to='/' />
          }
        />
        <Redirect to='/auth/login' />
      </Switch>
    </>
  );
};

export default AuthRouter;
