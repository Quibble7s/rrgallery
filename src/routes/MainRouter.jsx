import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { useOnAuthChange } from "../hooks/useOnAuthChange";
import UserRouter from "./UserRouter";
import HomeRouter from "./HomeRouter";

import "../sass/components/container/container.scss";
import { useSelector } from "react-redux";
const MainRouter = () => {
  useOnAuthChange();
  const { auth } = useSelector((state) => state);
  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter
            loged={auth.loged}
            exact
            path='/user'
            component={UserRouter}
          />
          <PublicRouter path='/' component={HomeRouter} />
        </Switch>
      </Router>
    </>
  );
};

export default MainRouter;
