// frontend/src/components/Navigation/index.js

import React, { useState } from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import { useEffect} from 'react';
import "./Navigation.css";
import logo from "../../assets/logo.png";
import * as sessionActions from "../../store/session";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useDispatch, useSelector } from 'react-redux';
// import PostForm  from './PostForm';
import ProductIndexItem from './ProductIndexItem';
import { getProducts } from '../../store/products';
import { fetchProducts } from '../../store/products';
import Carousel from 'better-react-carousel';
import {SliderData} from "./SliderData"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function Navigation({slides}) {
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
    const length = slides.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    console.log(current)
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productItems = products.map(product => {
    return <ProductIndexItem key={product.id} product={product} />
  });

  if(!Array.isArray(slides) || slides.length <=0){
    return null;
  }
  

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

      
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            0
          </span>
        </div>
      
    </div>
  </div>
 
    <section className="slider">

        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow"  onClick={nextSlide}/>
      {
        SliderData.map((slide, index)=>{
            return(
                <div className={index === current ? 'slide active' : 'slide' } key={index}>
                    {index===current && ( <img className="image" src={slide.image} alt='product' />)}
                    
                </div>
            )
        })
      
      }
        <section className="sometext">
        <div className="tile1">ooone</div>
        <div className="tile2">two</div>
        <div className="tile3">three</div>
        <div className="tile4">four</div>
        
        </section>
        
    </section>
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
