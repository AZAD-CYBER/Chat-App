import React from "react";
import "./styles/main.scss";
import "rsuite/dist/rsuite.min.css";
import { Switch } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
