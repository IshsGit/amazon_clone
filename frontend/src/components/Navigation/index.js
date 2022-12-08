// frontend/src/components/Navigation/index.js

import React, { useState } from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import * as sessionActions from "../../store/session";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
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

  

  return (
    <>
  <div className="header">
  <Link to="/" >
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
        </Link>
        <div className="external-link" >  <a  className='github' href="https://www.linkedin.com/"><GitHubIcon /></a>
        <a className='linkedin' href="https://www.linkedin.com/"><LinkedInIcon /></a>
        </div>
      
        
       
        
       
    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchIcon className="header__searchIcon" />
    </div>

    <div className="header__nav">
      
        <div className="header__option">
       
       
          {/* <Link to="/login">
          <span className="header__optionOneLineOne">Hello, sign in</span>
          {login && <button onClick={logout}>Logout</button>}
          {!login && <span className="header__optionLineTwo">Accounts & Lists</span>}
          </Link> */}

          <div class="dropdown">
            <button class="dropbtn">
            {login&&<div>Welcome, {sessionUser.name}</div>}
            <Link to="/login">
            {!login && <span className="header__optionOneLineOne">Hello, sign in</span>}
           <span className="header__optionLineTwo">Accounts & Lists</span>
           </Link>
            </button>
           {!login&& <div><div class="dropdown-content">
            <Link to="/Signup">Create an account</Link>
            <Link to="/login">Sign in</Link>
            </div></div>}

            {login&&  <div><div class="dropdown-content">
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

      
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            0
          </span>
        </div>
      
    </div>
  </div>

    {/* <div className="nav-bar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="icon-logo" className="nav-logo"></img>
        </Link>
      </div>
      <div className="nav-center">
        <form className="nav-search">
          <input type="text" className="nav-search-field"></input>
          <input type="submit" className="nav-search-button"></input>
        </form>
      </div>
      <div className="nav-right">
        {login && <button onClick={logout}>Logout</button>}
        <div className="nav-right-container">
          <Link to="/login">
            <span>Hello, {display}</span>
            <p>Accounts & Lists</p>
          </Link>
        </div>
        <div className="nav-right-container">
          <span>Returns</span>
          <p>& Orders</p>
        </div>
        <div className="nav-right-container">
          <p>Cart</p>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default Navigation;
