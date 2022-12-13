import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const AllProducts= (props) => {
  const product = props.product;
  const dispatch = useDispatch();


  return (
    <li>
      <Link to={`/products/${product.id}`}>{product.title}</Link>
      {/* <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      <button onClick={handleClick}>Delete</button> */}
    </li>
  );
};

export default AllProducts;