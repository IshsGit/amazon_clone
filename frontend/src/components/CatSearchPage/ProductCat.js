import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const GetCat= (props) => {
  const product = props.product;

  return (
    <li>
      <Link to={`/products/${product.id}`}>{product.category}</Link>
    </li>
  );
};

export default GetCat;