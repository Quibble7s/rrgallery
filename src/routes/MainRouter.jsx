import React from "react";
import { Switch } from "react-router-dom";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import AuthRouter from "./AuthRouter";
import { useOnAuthChange } from "../hooks/useOnAuthChange";

const MainRouter = () => {
  const loged = useOnAuthChange();
  return (
    <>
      <Router>
        <Switch>
          <PublicRouter loged={loged} path='/auth' component={AuthRouter} />
          <PrivateRouter loged={loged} path='/' component={AppRouter} />
        </Switch>
      </Router>
    </>
  );
};

export default MainRouter;
