import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./mainpage.css";
// import { deletePost } from '../store/posts';

/*
Export as the default a `PostIndexItem` component that takes in a `post` as
props. The component should render an `li` containing the following:

1. A link to the post's show page with text of the post's `title` 
2. A link to the post's edit page with text 'Edit'.
3. A button to delete the post.

*/

const ProductIndexItem = (props) => {
  const product = props.product;
  const dispatch = useDispatch();


  return (
   
    <Link to={`/products/${product.id}`}><img className='productImg' src={product.photo}></img></Link>
    
 
  );
};

export default ProductIndexItem;