import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthLogin from "../pages/AuthLogin";

import "../sass/components/container/container.scss";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={AuthLogin} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
