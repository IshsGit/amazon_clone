import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import ReviewForm from './ReviewForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products';
// import { destroyReview, getBenchReviews } from '../../store/reviews';
// import './BenchShowPage.css';

function DetailProductPage() {
    console.log("in detail")
  const dispatch = useDispatch();
  const { productId } = useParams();
  
console.log(productId);
  const sessionUser = useSelector(state => state.session.user);
  const product = useSelector(state => state.products[productId]);
//   const reviews = useSelector(getProductReviews(parseInt(productId)));
    
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  if (!product) {
    return null;
  }

  const { title, description, category, price, photoUrl } = product;
//   const hasReviewed = sessionUser && reviews.some(review => review.authorId === sessionUser.id);
  
  return (
    <div className="product-show">
     
      <div className="product-show-header">
        <h1>{product.title}</h1>
        <Link to="/">Back to Benches Index</Link>
      </div>
      <div className="product-show-visuals">
        {photoUrl && <img src={photoUrl} alt='Bench' className="bench-show-image"/>}
       
      </div>
      <section className="bench-show-section bench-details">
        <h2>Details</h2>
        <p>
          {description}
        </p>
        <ul>
          <li><span className='info-category'>Seats: </span>{description}</li>
          <li><span className='info-category'>Latitude: </span>{price}</li>
        
        </ul>
      </section>
      <section className="bench-show-section">
        <h2>Reviews</h2>
      
       
      </section>
    </div>
  );
};



export default DetailProductPage;
