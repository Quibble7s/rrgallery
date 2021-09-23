import React from "react";

import Navbar from "../components/Navbar/Navbar";

import "../sass/components/container/container.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/search/q=:q' component={SearchPage} />
      </Switch>
    </>
  );
};

export default AppRouter;
