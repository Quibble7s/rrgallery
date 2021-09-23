import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";

const HomeRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/search/q=:q' component={SearchPage} />
      </Switch>
    </>
  );
};

export default HomeRouter;
