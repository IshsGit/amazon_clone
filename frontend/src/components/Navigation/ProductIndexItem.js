import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
  const product = props.product;

  return (
    <li>
      <Link to={`/products/${product.id}`}>{product.title}</Link>
    </li>
  );
};

export default ProductIndexItem;