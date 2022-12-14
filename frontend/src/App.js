import React from "react";
import MainPage from "./components/MainPage";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import DetailProductPage from "./components/DetailProductPage/DetailProductPage";
import "./reset.css";
import { SliderData } from "./components/MainPage/SliderData";
import CatSearchPage from "./components/CatSearchPage/CatSearchPage";
import ProductIndex from "./components/ProductIndex/ProductIndex";
import ProductCart from "./components/ProductCart/ProductCart";


function App() {
  
  return (
    <>
      <Switch>
      <Route exact path="/carts">
          <Navigation />
          <CatSearchPage />
          <ProductCart />
        </Route>
        <Route exact path = "/">
          <Navigation />
          <CatSearchPage />
   <MainPage slides={SliderData}/>
        </Route>
        <Route path="/login">
       
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/products/:productId">
        <Navigation />
        <CatSearchPage />
        <DetailProductPage/>
        </Route>
        <Route path="/:category">
          <Navigation />
          <CatSearchPage />
   
          <ProductIndex />
        </Route>
        <Route exact path="/products">
          <Navigation />
          <CatSearchPage />
          <ProductIndex />
        </Route>
       <Route path="/:search">
          <Navigation />
          <CatSearchPage />
          <ProductIndex/>
       </Route>
      </Switch>
    </>
  );
}

export default App;
