import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { useOnAuthChange } from "../hooks/useOnAuthChange";
import UserRouter from "./UserRouter";
import HomeRouter from "./HomeRouter";

import "../sass/components/container/container.scss";
const MainRouter = () => {
  const loged = useOnAuthChange();
  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter loged={loged} path='/user' component={UserRouter} />
          <PublicRouter path='/' component={HomeRouter} />
        </Switch>
      </Router>
    </>
  );
};

export default MainRouter;
