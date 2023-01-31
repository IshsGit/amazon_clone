import { useEffect} from "react";
import {getReviews,fetchReviewsByProduct,deleteReview} from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./review.css";


function Reviews({ productId }) {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews);
  const history = useHistory();
  

  useEffect(() => {
    dispatch(fetchReviewsByProduct(productId));
  }, [dispatch, productId]);


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



  const listReviews = reviews.map((review) => (
    <div key={review.id} className="product-review">
      <div className="review-name-container">
        <div className="placeholder-pic">
          <img className="placeholder" src='{placeholder}' alt="avatar"></img>
          <span className="review-name">{review.user.name}</span>
        </div>
      </div>
      <div
        className="review-rating"
        onClick={(e) => handleEditClick(e, review)}
      >
       
      </div>
      <div className="review-location-label">
        Reviewed in the United States on {createdToDate(review.createdAt)}
      </div>
      <div className="review-body">{review.body}</div>
    </div>
  ));

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