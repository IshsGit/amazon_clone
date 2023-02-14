import { useEffect} from "react";
import {receiveReviews, deleteReview, receiveReviewsByProduct} from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./review.css";
import noStar from "../../assets/empty_star.png";
import allStar from "../../assets/filled_star.png";

function Reviews({productId}) {
 
  const dispatch = useDispatch();
  const history = useHistory();
  const reviews = useSelector(receiveReviews);
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(receiveReviewsByProduct(productId));
  }, []);

  const handleEdit = (review) => {
    history.push(`/products/${productId}/review/${review.id}`);
  };

  const countReview = (rating,stars) => {
    let idx=0;
    while(idx <rating){
      stars.push(<img key={idx} className="star-png" src={allStar}  alt="star"></img>);
      idx+=1;
    }
    return stars;

  }
  const showRating = (rating, stars) => {
    let idx = rating;
    while(idx < 5){
    stars.push(<img key={idx} className="star-png" src={noStar}  alt="star"></img>);
    idx+=1;
  }
    return stars;
  }
  const showReviewRating = (review) => {
    let starArr = [];
    countReview(review.rating, starArr)
    showRating(review.rating, starArr)
    return starArr;
  };


  const showReviews = reviews.map((review, idx) => (
    <div key={idx} className="product-review">
      {review.headline}
          <div className="username">By {review.user.name}</div>
      <div
        className="show-rating"
       
      >
        <div className="user-stars">
          {showReviewRating(review)}{" "}
          {review.headline}
        </div>
      </div>
      
      <div className="user-feedback">{review.body}</div>
      {review.userId === userId && (
        <>
          <div className="edit">
            <Link to={`/products/${productId}/review/${review.id}/edit`}>
            Edit
            </Link>
          </div>
          <div className="delete">
            <button
              className="delete-button"
              onClick={(e) => dispatch(deleteReview(review.id))}
            >
             Delete
            </button>
          </div>
        </>
      )}
      <hr></hr>
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

      <div className="main-review-container">
        <div className="left-review-container">
          <div className="product-ratings-container">
          </div>
          <div className="review-creator-container">
            <div className="top-half">
            <div className="review-creator-button-container">
              <Link
                className="review-creator-button"
                to={`/products/${productId}/review/`}
              >
                Write a review
              </Link>
            </div>
            </div>
          </div>
        </div>
          <div className="product-review-label">
            Read User Reviews Below
          </div>
          {showReviews}
        </div>
    
    </>
  );
}

export default Reviews;