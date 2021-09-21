import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useOnAuthChange } from "../hooks/useOnAuthChange";
import NewImagesPage from "../pages/NewImagesPage";
import SearchImagesPage from "../pages/SearchImagesPage";

import "../sass/components/container/container.scss";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  const loged = useOnAuthChange();
  return (
    <>
      <Router>
        {loged && <Navbar />}
        <Switch>
          <Route
            exact
            path='/'
            component={() =>
              loged ? <NewImagesPage /> : <Redirect to='/login' />
            }
          />
          <Route
            exact
            path='/search/q=:q'
            component={() =>
              loged ? <SearchImagesPage /> : <Redirect to='/login' />
            }
          />
          <PublicRouter loged={loged} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
