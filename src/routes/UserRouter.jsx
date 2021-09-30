import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import UserProfile from "../pages/UserProfile";

import UnderConstruction from "../pages/UnderConstruction";

const UserRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path='/user/:id/profile' component={UnderConstruction} />
        <Route exact path='/user/:id/liked' component={UnderConstruction} />
        <Route exact path='/user/:id/favorites' component={UnderConstruction} />
        <Route exact path='/user/configuration' component={UnderConstruction} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  );
};

export default UserRouter;
