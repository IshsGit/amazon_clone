import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams} from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/products";
import { createReview } from "../../store/review";
import "./ReviewCreate.css";
import noStar from "../../assets/empty_star.png";
import allStar from "../../assets/filled_star.png";

function ReviewForm() {

  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector(getProduct(productId));
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const userId = useSelector((state) => state.session.user?.id);
  const sessionUser = useSelector((state) => state.session.user);
  const [headline, setHeadline] = useState("");
  const [rating, setRating] = useState(0); 



  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);


  if (!userId) history.push("/login");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(createReview({ userId, productId, headline, rating, body }))
      .then(() => {
        history.push(`/products/${productId}`);
      })
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (rating === 0) {
          if (data?.errors) {
            data.errors.push("Rating must be greater than 0");
          } else {
            data.push("Rating must be greater than 0");
          }
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const handleSelect = (e, num) => {
    e.preventDefault();
    if(num === 5){
      const stars = document.querySelectorAll(".star-query");
      for(let i =0; i<num;i++){
      
        stars.forEach((star, idx) => {
          if(idx<num){
            star.src = allStar;
          } 
        })
        
      }
    }

    if(num === 4){
      const stars = document.querySelectorAll(".star-query");
      for(let i =0; i<num;i++){
      
        stars.forEach((star, idx) => {
          if(idx<num){
            star.src = allStar;
          } else {
            star.src = noStar;
          }
        })
        
      }
    }
    if(num ===3){
      const stars = document.querySelectorAll(".star-query");
      for(let i =0; i<num;i++){
      
        stars.forEach((star, idx) => {
          if(idx<num){
            star.src = allStar;
          } else {
            star.src = noStar;
          }
        })
        
      }
    }
    if(num === 2){
      const stars = document.querySelectorAll(".star-query");
      for(let i =0; i<num;i++){
      
        stars.forEach((star, idx) => {
          if(idx<num){
            star.src = allStar;
          } else {
            star.src = noStar;
          }
        })
        
      }
    }
    if(num === 1){
      const stars = document.querySelectorAll(".star-query");
      for(let i =0; i<num;i++){
      
        stars.forEach((star, idx) => {
          if(idx<num){
            star.src = allStar;
          } else {
            star.src = noStar;
          }
        })
        
      }
    }
    setRating(num);
  };

  if (!product) return null;
  
  return (
  
    <>
   
     <div className="review-form">
      <form onSubmit={handleSubmit}>
      <ul>
            {errors.map((error) => (
              <li className="error-msg" key={error}>{error}</li>
            ))}
          </ul>
       
          <div className="review-create">Create Review</div>
          <div className="username">{sessionUser.name}</div>
          <div className="create-review-product-container">
            <div className="review-product-image-container">
              <img
                className="review-product-image"
                src={product.photo}
                alt="review-item"
              ></img>
       
            </div>
            <div className="product-review-title">{product.title}</div>
            <div className="create-review-product-name">{product.name}</div>
          </div>
        
        <hr />
    
        <div className="create-review-rating-container">
          <div className="create-review-rating-label">Overall Rating</div>
          <div className="create-review-star-rating-container">
            <button
              className="review-star"
              onClick={(e) => handleSelect(e, 1)}
            >
              <img
                className="star-query"
                src={noStar}
                alt="star-rating"
              ></img>
            </button>
            <button
              className="review-star"
              onClick={(e) => handleSelect(e, 2)}
            >
              <img
                className="star-query"
                src={noStar}
                alt="star-rating"
              ></img>
            </button>
            <button
              className="review-star"
              onClick={(e) => handleSelect(e, 3)}
            >
              <img
                className="star-query"
                src={noStar}
                alt="star-rating"
              ></img>
            </button>
            <button
              className="review-star"
              onClick={(e) => handleSelect(e, 4)}
            >
              <img
                className="star-query"
                src={noStar}
                alt="star-rating"
              ></img>
            </button>
            <button
              className="review-star"
              onClick={(e) => handleSelect(e, 5)}
            >
              <img
                className="star-query"
                src={noStar}
                alt="star-rating"
              ></img>
            </button>
          </div>
      
        </div>
        <hr />
      
          <div >Add a headline</div>
          <input
            className="user-feedback-outer"
            type="text"
            value={headline}
            placeholder="Please review our product"
            onChange={(e) => setHeadline(e.target.value)}
          ></input>
        
        <hr />
        <div className="create-review-body-container">
          <div className="create-review-body-label">Add a written review</div>
          <textarea
            value={body}
            className="user-feedback-inner"
            placeholder="Please review our product!"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
      
        </div>
        <hr />
        <div>
          <input
            className="submit-button"
            type="Submit"
            value="Submit"
            readOnly
          ></input>
        </div>
      </form>
    </div>
    </>
  );
}

export default ReviewForm;
