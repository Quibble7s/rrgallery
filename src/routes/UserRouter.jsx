import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import UserProfile from '../pages/UserProfile';

import UnderConstruction from '../pages/UnderConstruction';
import Navbar from '../components/Navbar/Navbar';
import UserConfig from '../pages/UserConfig';

const UserRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/user/profile' component={UserProfile} />
        <Route exact path='/user/configuration' component={UnderConstruction} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  );
};

export default UserRouter;
