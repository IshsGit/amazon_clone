// frontend/src/components/Navigation/index.js

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
  const [searchTerm, setSearchTerm] = React.useState("");
  const history = useHistory();
 const [searchResults, setSearchResults] = useState([]);
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

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);   
  };

  useEffect(() => {
    const results = arr.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
     <div className='main-page-container'>
  <div className="header">
  <Link to="/" >
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
        </Link>
        <div className="external-link" >  <a  className='github' href="https://github.com/IshsGit/amazon_clone"><GitHubIcon /></a>
        <a className='linkedin' href="https://www.linkedin.com/"><LinkedInIcon /></a>
        </div>

    <div className="header-search">
    <input className="header-searchInput" type="text" value={searchTerm} onChange={handleSearch}/>
    <Link className="category-link" key={searchTerm} to={`/${searchTerm}`} ><SearchIcon className="header-searchIcon" /></Link>
    </div>


    <div className="header-nav">
        <div className="header-option">
          <div className="dropdown">
            <button className="dropbtn">
            {login&&<div>Welcome, {sessionUser.name}</div>}
            <Link to="/login">
            {!login && <span className="header-optionOneLineOne">Hello, sign in</span>}
           <span className="header-optionLineTwo">Accounts & Lists</span>
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

        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
    
      <div className="header-option">
        <span className="header-optionLineOne">Your</span>
        <span className="header-optionLineTwo">Prime</span>
      </div>

      {/* {login ? "/carts" : "/login"} */}
        <div className="header-cart">
        <Link className="cart-link" to={login ? "/carts" : "/login"} >
          <div className="nav-right-container">
            <p className="cart"> <ShoppingBasketIcon /></p>
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
