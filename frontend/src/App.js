import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginFormPage from "./components/LoginForm";
import "./reset.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/Signup">
          <SignupForm />
        </Route>
        <Route path="/">
            <LoginFormPage />
          </Route>
      </Switch>
    </>
  );
}

export default App;
