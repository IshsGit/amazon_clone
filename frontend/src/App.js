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
import CheckoutPage from "./components/ProductCart/checkout";
import ReviewForm from "./components/ReviewProduct/ReviewCreate";
import ReviewShowPage from "./components/ReviewProduct/ReviewDetails";
import ReviewEdit from "./components/ReviewProduct/ReviewEdit";
import Footer from "./components/Footer";
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
        <Route exact path="/login">
       
          <LoginFormPage />
        </Route>
        <Route exact path="/signup">
          <SignupFormPage />
          <Footer />
        </Route>
        <Route exact path="/products/:productId">
        <Navigation />
        <CatSearchPage />
        <DetailProductPage/>
        <Footer />
        </Route>
        <Route exact path="/:category">
          <Navigation />
          <CatSearchPage />
          <ProductIndex />
     
        </Route>
        <Route exact path="/products">
          <Navigation />
          <CatSearchPage />
          <ProductIndex />
        
        </Route>
       <Route exact path="/:search">
          <Navigation />
          <CatSearchPage />
          <ProductIndex/>
      
       </Route>
       <Route exact path="/products/:productId/review">
          <Navigation />
          <CatSearchPage />
          <ReviewForm />
          <Footer/>
        </Route>
        <Route exact path="/products/:productId/review/:reviewId">
          <Navigation />
          <CatSearchPage />
          <ReviewShowPage />
          <Footer />
        </Route>
      
        <Route exact path="/carts/checkout">
          <Navigation />
          <CatSearchPage />
          <CheckoutPage />

        </Route>
        <Route exact path="/products/:productId/review/:reviewId/edit">
        <Navigation />
          <CatSearchPage />
       <ReviewEdit />
        </Route>
      </Switch>
    </>
  );
}

export default App;
