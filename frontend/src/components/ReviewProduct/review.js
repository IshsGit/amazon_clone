import { useEffect} from "react";
import {receiveReviews, deleteReview, receiveReviewsByProduct} from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./review.css";
import emptyStar from "../../assets/empty_star.png";
import filledStar from "../../assets/filled_star.png";

function Reviews({productId}) {
 
  const dispatch = useDispatch();
   const history = useHistory();
  const reviews = useSelector(receiveReviews);
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(receiveReviewsByProduct(productId));
  }, []);


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

  const handleEditClick = (e, review) => {
    history.push(`/products/${productId}/review/${review.id}`);
  };

  const createdToDate = (date) => {
    date = new Date(date);
    let str = date.toDateString();
    str = str.split(" ");
    return `${monthNames[date.getMonth()]} ${str[2]}, ${str[3]}`;
  };


  
  const displayStarRating = (review) => {
    let stars = [];
    for (let i = 0; i < review.rating; i++) {
      stars.push(
        <img key={i}
          className="star-ratings-image"
          src={filledStar}
          alt="filled-star"
        ></img>
      );
    }
    for (let i = review.rating; i < 5; i++) {
      stars.push(
        <img key={i}
          className="star-ratings-image"
          src={emptyStar}
          alt="empty-star"
        ></img>
      );
    }
    return stars;
  };

  const listReviews = reviews.map((review, idx) => (
    <div key={idx} className="product-review">
      {review.headline}
      <div className="review-name-container">
        <div className="placeholder-pic">
        
          <span className="review-name">{review.user.name}</span>
        </div>
      </div>
      <div
        className="review-rating"
        onClick={(e) => handleEditClick(e, review)}
      >
        <div className="review-star-ratings">
          {displayStarRating(review)}{" "}
          <span className="review-heading">{review.headline}</span>
        </div>
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
            <button
              className="delete-button"
              onClick={(e) => dispatch(deleteReview(review.id))}
            >
              <div className="authorized-button-label">Delete</div>
            </button>
          </div>
        </div>
      )}
    </div>
  ));
  
  
  let rating = 0;
  reviews.forEach((review) => {
    rating += review.rating;
  });
  if (rating > 0) {
    rating = (rating / reviews.length).toFixed(1);
  }

  return (
    <>
  <hr />
      <div className="main-review-container">
        <div className="left-review-container">
          <div className="product-ratings-container">
            <div className="product-ratings-label">Customer Reviews</div>
            
          </div>
          <hr />
          <div className="review-creator-container">
            <div className="review-creator-label">Review this product</div>
            <div className="review-creator-comment">
              Share your thoughts with other customers
            </div>
            <div className="review-creator-button-container">
              <Link
                className="review-creator-button"
                to={`/products/${productId}/review/`}
              >
                Write a customer review
              </Link>
            </div>
          </div>
        </div>
        <div className="product-reviews-container">
          <div className="product-review-label">
            Top reviews from the United States
          </div>
          {listReviews}
        </div>
      </div>
    </>
  );
}

export default Reviews;