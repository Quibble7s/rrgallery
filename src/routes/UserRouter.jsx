import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "../pages/UserProfile";

const UserRouter = () => {
  return (
    <Switch>
      <Route exact path='/user/:id/profile' component={UserProfile} />
    </Switch>
  );
};

export default UserRouter;
