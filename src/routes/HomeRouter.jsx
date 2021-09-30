import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import FullView from "../components/FullView/FullView";

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
        <Route exact path='/photo' component={FullView} />
        <Route exact path='/search' component={SearchPage} />
        <Route path='/auth' component={AuthRouter} />
        <Redirect to='/' />
      </Switch>
      {!history.location.pathname.includes("/auth") && <Footer />}
    </>
  );
};

export default HomeRouter;
