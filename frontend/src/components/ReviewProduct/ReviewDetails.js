import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { fetchReview, getReview } from "../../store/review";
import { deleteReview } from "../../store/review";
import "./ReviewDetail.css";


function ReviewShowPage() {
  const { reviewId, productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const review = useSelector(getReview(reviewId)) || {};
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(fetchReview(productId, userId));
  }, [dispatch, productId, userId]);

  console.log("this is user id");
  console.log(userId)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const createdToDate = (date) => {
    date = new Date(date);
    let str = date.toDateString();
    str = str.split(" ");
    return `${monthNames[date.getMonth()]} ${str[2]}, ${str[3]}`;
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review.id));
    history.push(`/products/${productId}`);
  };

  return (
    <div className="product-review">
      <div className="customer-review-label">Customer Review</div>
      <div className="review-name-container">
        <div className="placeholder-pic">
          <img className="placeholder" src='{placeholder}' alt="avatar"></img>
          <span className="review-name">{review.user.name}</span>
        </div>
      </div>
      <div className="review-rating">
      </div>
      <div className="review-location-label">
        Reviewed in the United States on {createdToDate(review.createdAt)}
      </div>
      <div className="review-body">{review.body}</div>
      {review.userId === userId && (
        <div className="authorized-review-buttons">
          <div className="edit-button-container">
            <Link to={`/products/${productId}/review/${review.id}/edit`}>
              <div className="authorized-button-label">Edit</div>
            </Link>
          </div>
          <div className="delete-button-container">
            <button className="delete-button" onClick={handleDeleteClick}>
              <div className="authorized-button-label">Delete</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewShowPage;