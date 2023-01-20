import csrfFetch from "./csrf";
import { addUser } from "./users.js";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";
export const ADD_REVIEW = "reviews/ADD_REVIEW";
export const ADD_REVIEWS = "reviews/ADD_REVIEWS";

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review,
});

export const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

export const addReviews = (reviews) => ({
  type: ADD_REVIEWS,
  reviews,
});

export const getReviews = (state) =>
  state.reviews ? Object.values(state.reviews) : [];

export const getReview = (reviewId) => (state) =>
  state.reviews ? state.reviews[reviewId] : null;

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

export const fetchReviewsByProduct = (product_id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${product_id}/reviews`);
  const data = await res.json();
  dispatch(addReviews(data.reviews));
};

export const fetchReview = (product_id, user_id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${product_id}/reviews/${user_id}`);
  const data = await res.json();
  dispatch(addReview(data.review));
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

export const deleteReview = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  dispatch(removeReview(data));
};

const reviewReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case ADD_REVIEWS:
      return { ...action.reviews };
    case REMOVE_REVIEW:
      delete newState[action.review.review.id];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
