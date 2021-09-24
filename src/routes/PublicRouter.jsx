import React from "react";
import { Route } from "react-router-dom";

const PublicRouter = ({ component: Component, ...routeProps }) => {
  return (
    <Route {...routeProps} component={(props) => <Component {...props} />} />
  );
};

export default PublicRouter;
