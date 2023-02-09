import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getReview, receiveReview } from "../../store/review";
import { deleteReview } from "../../store/review";
import "./ReviewDetail.css";


function ReviewShowPage() {
  console.log('in reviewshow')
  const { reviewId, productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const review = useSelector(receiveReview(reviewId)) || {};
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(getReview(productId, userId));
  }, [dispatch, productId, userId]);


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

  let rating = 0;
  review.forEach((review) => {
    rating += review.rating;
  });
  if (rating > 0) {
    rating = (rating / review.length).toFixed(1);
  }




  return (
    <div className="product-review">
      <div className="customer-review-label">Customer Review</div>
     
      <div className="review-name-container">
       
      </div>
      <div className="review-rating">
      </div>
      <div className="review-location-label">
        Reviewed in the United States on {createdToDate(review.createdAt)}
      </div>
      <div className="review-body">{review.body}</div>
      {review.id === userId && (
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