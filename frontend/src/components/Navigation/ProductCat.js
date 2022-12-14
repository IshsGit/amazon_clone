import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { deletePost } from '../store/posts';

/*
Export as the default a `PostIndexItem` component that takes in a `post` as
props. The component should render an `li` containing the following:

1. A link to the post's show page with text of the post's `title` 
2. A link to the post's edit page with text 'Edit'.
3. A button to delete the post.

*/

const GetCat= (props) => {
  const product = props.product;
  const dispatch = useDispatch();

//   const handleClick = (e) => {
//     e.preventDefault();
//     dispatch(deletePost(props.id))
// };

  return (
    <li>
      <Link to={`/products/${product.id}`}>{product.category}</Link>
      {/* <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      <button onClick={handleClick}>Delete</button> */}
    </li>
  );
};

export default GetCat;