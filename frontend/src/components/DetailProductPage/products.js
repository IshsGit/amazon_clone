import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const AllProducts= (props) => {
  const product = props.product;
  const dispatch = useDispatch();
    const {title, description, category, price, rating} = product;

  return (
    <>
      <a href={`/products/${product.id}`}>{title}</a>
      </>
      

    
  );
};

export default AllProducts;