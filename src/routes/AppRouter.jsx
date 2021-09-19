import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { useOnAuthChange } from "../hooks/useOnAuthChange";
import HomePage from "../pages/HomePage";

import "../sass/components/container/container.scss";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  const loged = useOnAuthChange();
  return (
    <Router>
      <Switch>
        <PrivateRouter exact path='/' loged={loged} component={HomePage} />
        <PublicRouter loged={loged} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default AppRouter;
