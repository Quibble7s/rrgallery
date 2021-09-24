import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import AuthRouter from "./AuthRouter";

const HomeRouter = ({ history }) => {
  return (
    <>
      {!history.location.pathname.includes("/auth") && <Navbar />}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/search/q=:q' component={SearchPage} />
        <Route path='/auth' component={AuthRouter} />
      </Switch>
    </>
  );
};

export default HomeRouter;
