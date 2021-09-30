import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ loged, component: Component, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      component={(props) =>
        loged ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

export default PrivateRouter;
