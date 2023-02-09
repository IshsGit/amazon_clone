import csrfFetch from "./csrf";
export const CREATE_REVIEW = "reviews/CREATE_REVIEW";
export const DELETE_REVIEW = "reviews/DELETE_REVIEW";
export const CREATE_REVIEWS = "reviews/CREATE_REVIEWS";

export const addReviews = (reviews) => ({
  type: CREATE_REVIEWS,
  reviews,
});

export const removeReview = (review) => ({
  type: DELETE_REVIEW,
  review,
});

export const addReview = (review) => ({
  type: CREATE_REVIEW,
  review,
});

export const createReview = (review) => async (dispatch) => {
  const res = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify(review),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(addReview(data.review));
};


export const receiveReview = (reviewId) => (state) =>
  state.reviews ? state.reviews[reviewId] : null;

export const receiveReviews = (state) =>
  state.reviews ? Object.values(state.reviews) : [];

  export const deleteReview = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    dispatch(removeReview(data));
  };
  
  export const editReview =
  (review_id, headline, body, rating) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${review_id}`, {
      method: "PATCH",
      body: JSON.stringify({ review: { headline, body, rating } }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    dispatch(addReview(data.review));
  };


export const receiveReviewsByProduct = (product_id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${product_id}/reviews`);
  const data = await res.json();
  dispatch(addReviews(data.reviews));
};

export const getReview = (product_id, user_id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${product_id}/reviews/${user_id}`);
  const data = await res.json();
  dispatch(addReview(data.review));
};


const reviewReducer = (state = {}, action) => {

  const newState = { ...state };
  switch (action.type) {
    case CREATE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case CREATE_REVIEWS:
      return { ...action.reviews };
    case DELETE_REVIEW:
      delete newState[action.review.review.id];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
