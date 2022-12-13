import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import ReviewForm from './ReviewForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products';
import prime from "../../assets/prime.png";
import "./DetailProductPage.css";

function DetailProductPage() {
    console.log("in detail")
  const dispatch = useDispatch();
  const {productId}  = useParams();
  

  const sessionUser = useSelector(state => state.session.user);
  const product = useSelector(state => state.products[productId] ? state.products[productId] : {})
//   const reviews = useSelector(getProductReviews(parseInt(productId)));
   
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  if (!product) {
    return null;
  }

  // const { title, description, category, price, photoUrl } = product;
  // const hasReviewed = sessionUser && reviews.some(review => review.authorId === sessionUser.id);

  return (
    <div className="parent-container">
    <div className="product-image-details">
      <img className="product-image-show" src={product.photo} alt="product-display"></img>
    </div>
    <div className="product-title-details">
      {product.title}
      <p>Brand: Zish Services</p>
        <hr></hr>
        <div className="product-price">
          <span className="price-symbol">$</span>
          <span className="price-price">{product.price}</span>
    </div>

        <div>
        
          <span className="prime-label">One-Day</span>
        <div className="return-label">FREE Returns</div>
        </div>
        <hr />
        <div className="center-bottom-container">
          <div className="about-label">About this item:</div>
          <ul className="about-list">
            <li>{product.description}</li>
          </ul>
        </div>
        </div>
    
    </div>
    // <div className='parent-container'>
    // <div className="product-show">
    //   <img alt="product image" src={product.photo}></img>
    //   <p>Hover over image to zoom in</p>
    // </div>
    // <div className='title-container'> 
    // <p className='produce-title'>{product.title}</p>
    // </div>
    // </div>
  );
};



export default DetailProductPage;


// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchProduct, getProduct } from "../../store/products";
// // import { addToCart } from "../../store/cart";
// // import "./ProductShow.css";
// // import prime from "../../assets/prime.png";
// import { Link } from "react-router-dom";

// function ProductShowPage() {
//   const dispatch = useDispatch();

//   const { productId } = useParams();
//   const product = useSelector(getProduct(productId)) || {};
//   console.log(product);
//   const [count, setCount] = useState(1);
//   const userId = useSelector((state) => state.session.user?.id);
//   console.log(product);
//   useEffect(() => {
//     dispatch(fetchProduct(productId));
//   }, [productId, dispatch]);
  

 

 

 

 
//   if (!product) return null;
//   return (
//     <div className="display-show-container">
//       <div className="left-container">
//         <img
//           className="product-image-show"
//           src={product.photoUrl}
//           alt="product-display"
//         ></img>
//       </div>
//       <div className="center-container">
//         <span className="product-name">{product.title}</span>
//         <hr />
        
//         <div>
         
//         </div>
//         {/* </div>
//         <table className="price-table">
//           <tbody>
//             <tr className="price-table-row1">
//               <td className="price-label">Price:</td>
//               <td className="price-amt">${product.price}</td>
//             </tr>
//           </tbody>
//         </table> */}
//         <hr />
//         <div className="center-bottom-container">
//           <div className="about-label">About this item:</div>
//           <ul className="about-list">
//             <li>{product.description}</li>
//           </ul>
//         </div>
//       </div>
//       <div className="right-container">
//         <div className="product-price">
//           <span className="price-symbol">$</span>
        
//         </div>
//         <div>
       
//         <span className="prime-label">One-Day</span>
//         </div>
//         <div className="return-label">FREE Returns</div>
       
        
     
//       </div>
      
//     </div>
//   );
// }

// export default ProductShowPage;
