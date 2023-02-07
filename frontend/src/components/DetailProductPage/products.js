import React from 'react';




const AllProducts= (props) => {
  const product = props.product;

    const {title} = product;

  return (
    <>
      <a href={`/products/${product.id}`}>{title}</a>
      </>
      

    
  );
};

export default AllProducts;