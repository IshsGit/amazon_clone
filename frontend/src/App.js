import React from "react";
import MainPage from "./components/MainPage";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";

import "./reset.css";


function App() {
  
  return (
    <>
      <Switch>
        <Route exact path = "/">
          <Navigation />
          <MainPage />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
