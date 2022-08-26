import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Stories from "../pages/Stories";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Main() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/users" exact>
          <Users />
        </Route>

        <Route path="/stories" exact>
          <Stories />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/register" exact>
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
