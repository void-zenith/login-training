import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthContext } from "./App";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";

const AppRouter = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const knowPaths = ["/Components/login", "/Components/welcome"];

  if (!knowPaths.includes(window.location.pathname)) {
    if (isAuthenticated) {
      window.location.replace("/Components/welcome");
    } else {
      window.location.replace("/Components/login");
    }
  }
  return (
    <Router>
      <Switch>
        <Route path="/Components/Login">
          <Login></Login>
        </Route>
        <PrivateRoute condition={isAuthenticated} path="/Components/Welcome">
          <Welcome></Welcome>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

function PrivateRoute({ condition, children, ...rest }) {
  return (
    <Route {...rest}>
      {condition ? (
        children
      ) : (
        <Redirect to={{ pathname: "/Components/Login" }}></Redirect>
      )}
    </Route>
  );
}
export default AppRouter;
