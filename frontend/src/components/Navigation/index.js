// frontend/src/components/Navigation/index.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect} from 'react';
import "./Navigation.css";
import * as sessionActions from "../../store/session";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GetCat from "./ProductCat";
import { useDispatch, useSelector } from 'react-redux';
import ProductIndexItem from './ProductIndexItem';
import { getProducts } from '../../store/products';
import { fetchProducts } from '../../store/products';

function Navigation() {


  const sessionUser = useSelector((state) => state.session.user);

  let display;
  let login;
  if (sessionUser) {
    login = true;
    display = sessionUser.name;
  } else {
    display = "sign in";
  }

  let altDisplay;
  if (!sessionUser) {
    altDisplay = (
      <Link to="/login">
        <span>Hello, {display}</span>
        <p>Accounts & Lists</p>
      </Link>
    );
  } else {
    //should display profile page
    altDisplay = (
      <Link to="/login">
        <span>Hello, {display}</span>
        <p>Accounts & Lists</p>
      </Link>
    );
  }

  const logout = () => {
    dispatch(sessionActions.logout());
  };

  const dispatch = useDispatch();
  
  const products = useSelector(getProducts);
    const [current, setCurrent] = useState(0);
    

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productItems = products.map(product => {
    return <ProductIndexItem key={product.id} product={product} />
  });

  const getCat = products.map(product => {
    return <GetCat key={product.id} product={product} />
  });



  const arr =Array(getCat.length)
  .fill()
  .map((_, i) => (
   getCat[i].props.product.category
  ));

  const rem = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const unique = arr.filter(rem);




  return (
    <>
     <div className='main-page-container'>
  <div className="header">
  <Link to="/" >
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
        </Link>
        <div className="external-link" >  <a  className='github' href="https://github.com/IshsGit/amazon_clone"><GitHubIcon /></a>
        <a className='linkedin' href="https://www.linkedin.com/"><LinkedInIcon /></a>
        </div>
      
        
       
        
       
    <div className="header__search">
      <input className="header__searchInput" type="text" placeholder="Search bar coming soon"/>
      <SearchIcon className="header__searchIcon" />
    </div>

    <div className="header__nav">
      
        <div className="header__option">
       
       


          <div className="dropdown">
            <button className="dropbtn">
            {login&&<div>Welcome, {sessionUser.name}</div>}
            <Link to="/login">
            {!login && <span className="header__optionOneLineOne">Hello, sign in</span>}
           <span className="header__optionLineTwo">Accounts & Lists</span>
           </Link>
            </button>
           {!login&& <div><div className="dropdown-content">
            <Link to="/Signup">Create an account</Link>
            <Link to="/login">Sign in</Link>
            </div></div>}

            {login&&  <div><div className="dropdown-content">
            <button onClick={logout}>Logout</button>
            </div></div>}

            
            
          </div>
        </div>
      
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      
      

      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      {/* {login ? "/carts" : "/login"} */}
        <div className="header__optionBasket">
        <Link className="cart-link" to=''>
          <div className="nav-right-container">
            <p className="basket"> <ShoppingBasketIcon /></p>
          </div>
        </Link>
          
         
        </div>
      
    </div>
  </div>
 

    </div>
   
   
    </>
  );
}

export default Navigation;
