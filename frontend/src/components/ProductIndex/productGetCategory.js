import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const ProductGetCategory= (props) => {
  const product = props.product;
  const dispatch = useDispatch();
    const {title, description, category, price, rating} = product;

  return (
    <>
   
     <Link to={`/products/${product.id}`}>{category}</Link>
      </>
      

    
  );
};

export default ProductGetCategory;