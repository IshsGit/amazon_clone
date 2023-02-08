import React from 'react';

import { NavLink } from 'react-router-dom';


const AllProducts= (props) => {
  const product = props.product;

    const {title} = product;

  return (
    <>

      <NavLink to={`/products/${product.id}`}>{title}</NavLink>
      </>
      

    
  );
};

export default AllProducts;