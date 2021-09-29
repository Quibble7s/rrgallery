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
import LoadingDotsLine from "../components/Loading/LoadingDotsLine";
const MainRouter = () => {
  useOnAuthChange();
  const { auth } = useSelector((state) => state);
  return (
    <>
      <Router>
        <Switch>
          {!auth ? (
            <LoadingDotsLine />
          ) : (
            <>
              <PrivateRouter
                loged={auth.loged}
                path='/user'
                component={UserRouter}
              />
              <PublicRouter path='/' component={HomeRouter} />
            </>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default MainRouter;
