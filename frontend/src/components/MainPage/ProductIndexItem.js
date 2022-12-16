import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./mainpage.css";

const ProductIndexItem = (props) => {
  const product = props.product;
  const dispatch = useDispatch();


  return (
   
    <Link to={`/products/${product.id}`}><img className='productImg' src={product.photo}></img></Link>
    
 
  );
};

export default ProductIndexItem;