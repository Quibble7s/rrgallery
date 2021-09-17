import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthLogin from "../pages/AuthLogin";
import AuthRegister from "../pages/AuthRegister";

import "../sass/components/container/container.scss";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={AuthLogin} />
        <Route exact path='/register' component={AuthRegister} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
