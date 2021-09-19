import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthLogin from "../pages/AuthLogin";
import AuthRegister from "../pages/AuthRegister";

const PublicRouter = ({ loged }) => {
  return (
    <>
      <Route
        exact
        path='/login'
        component={() => (loged ? <Redirect to='/' /> : <AuthLogin />)}
      />
      <Route
        exact
        path='/register'
        component={() => (loged ? <Redirect to='/' /> : <AuthRegister />)}
      />
    </>
  );
};

export default PublicRouter;
