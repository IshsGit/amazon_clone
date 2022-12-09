/*
Export the following action constants and write the corresponding actions:

1. `RECEIVE_POSTS` (corresponding action should have a `posts` payload)
2. `RECEIVE_POST` (corresponding action should have a `post` payload)
3. `REMOVE_POST` (corresponding action should have a `postId` payload)
*/

export const RECEIVE_PRODUCTS = "posts/RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "posts/RECEIVE_PRODUCT";
// export const REMOVE_PRODUCT = "posts/REMOVE_POST";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

// export const removeProduct = (productId) => ({
//   type: REMOVE_PRODUCT,
//   productId
// });

/* 
Export a `getPost` selector that takes in a `postId` and returns the specified
post from the store.

Export a `getPosts` selector that returns an array of all the posts in the
store.
*/

// function (state) {
//   return state.posts;
// }

// useSelector(getPost(id));
// useSelector(getPosts);

export const getProduct = (productId) => (state) => state.products ? state.products[productId] : null;
export const getProducts = (state) => state.products ? Object.values(state.products) : [];

/*
Export the following functions with the specified parameters:

1. `fetchPosts`
2. `fetchPost(postId)`
3. `createPost(post)`
4. `updatePost(post)`
5. `deletePost(postId)`

Each function should call `fetch` to perform the desired database operation and
dispatch the appropriate action upon a successful response. (You do not need to
do anything if the `fetch` response is unsuccessful.) 
*/

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  // dispatch({
  //   type: RECEIVE_POSTS,
  //   posts: data
  // });

  dispatch(receiveProducts(data));
};

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${productId}`);
  const data = await res.json();

  dispatch(receiveProduct(data));
};

// export const createPost = (product) => async (dispatch) => {
//   const res = await fetch(`/api/products/`, {
//     method: 'POST',
//     body: JSON.stringify(product),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const data = await res.json();

//   dispatch(receiveProduct(data));
// };

// export const updatePost = (post) => async (dispatch) => {
//   const res = await fetch(`/api/posts/${post.id}`, {
//     method: 'PATCH',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const data = await res.json();

//   dispatch(receivePost(data));
// };

// export const deletePost = (postId) => async (dispatch) => {
//   const res = await fetch(`/api/posts/${postId}`, {
//     method: 'DELETE'
//   });

//   dispatch(removePost(postId));
// };

/*
Export a `postsReducer` function as the default export. It should take in the
old state and an action. It should appropriately handle all post actions, as
defined in the test specs.
*/

const productsReducer = (state = {}, action) => {
  const newState = {...state};

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {...newState, ...action.products};
    case RECEIVE_PRODUCT:
      newState[action.product.id] = action.product;
      return newState;
    // case REMOVE_POST:
    //   delete newState[action.postId];
    //   return newState;
    default:
      return state;
  }
};

export default productsReducer;