import React from "react";
import MainPage from "./components/MainPage";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";

import "./reset.css";
import { SliderData } from "./components/MainPage/SliderData";


function App() {
  
  return (
    <>
      <Switch>
        <Route exact path = "/">
          <Navigation />
   <MainPage slides={SliderData}/>
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
