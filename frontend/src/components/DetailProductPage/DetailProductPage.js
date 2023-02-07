import React, { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products';
import prime from "../../assets/prime.png";
import "./DetailProductPage.css";
import AllProducts from './products';
import ProductIndexItem from './ProductIndexItem';
import { getProducts } from '../../store/products';
import ProductGetCategory from './productGetCategory';
import { addToCart } from "../../store/cart";
import { receiveReviews} from "../../store/review";
import Reviews from '../ReviewProduct/review';

function DetailProductPage() {

  const dispatch = useDispatch();
  const {productId}  = useParams();
 
  const userId = useSelector((state) => state.session.user?.id);
  const product = useSelector(state => state.products[productId] ? state.products[productId] : {})
  const [count, setCount] = useState(1);
  const history = useHistory();
  const products = useSelector(getProducts);
  const reviews = useSelector(receiveReviews);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  if (!product) {
    return null;
  }

  
  // Random num gen, to be updated with dom manipulation
  function getRandomInt(price) {
    const min = Math.ceil(.75);
    const max = Math.floor(.15);
    return (Math.random(min,max)); 
  };

  function getRandomReviews(){
    const min = Math.ceil(1);
   const max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
   
  }

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  let currentMonth = month[d.getMonth()];

  function getRandomDay(){
    const max = Math.ceil(28);
    const min = Math.floor(16);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const productItems = products.map((product, idx) => {
    
    return <ProductIndexItem key={idx} product={product} />
  });

  const productDetails = products.map((product, idx) => {
    return <AllProducts key={idx} product={product} />
  });

  const productCat = products.map((product, idx) => {
    return <ProductGetCategory key={idx} product={product} />
  });

   const numArr = [];
   for(let i=0; i<11; i++){
      numArr.push(i.toString());
   }


  const quantities = numArr.map((idx) => {
      if(numArr[idx]==='0') 
        {return <option hidden key={idx}>{`Qty: ${count}`}</option>;} 
      else 
        { return(<option value={numArr[idx]} key={idx}> {numArr[idx]}  </option>)}
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) 
      dispatch(addToCart(product.id, count));
     else 
      history.push("/login");
    setCount(1);
  };
  
  const filter = products.map((product, idx) => {
    // if(product.category === products[productId-1].category )
    //    return <div className='tile-inner'>
    //       {productItems[idx]}

    //       <h2>{productDetails[idx]}</h2>
    //    </div>
  });

  return (
    <>
    <div className="parent-container">
   
    <div className="product-image-details">
      <img className="product-image-show" src={product.photo} alt="product-display"></img>
      
    </div>
   
    <div className="product-title-details">
      {product.title}
      <div className="product__rating">
          Rating:&nbsp;{Array(product.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p> 
            ))} &nbsp;&nbsp;
            {Math.round(getRandomReviews())}
           <p>{Math.round(Math.random(1,1000))} reviews</p>
        </div>
      <p>Brand: Zish Services</p>
        <hr></hr>
      
  <div className='tile-inner'>
  
      <span>
       <p>Top deal</p>
      <p> -{Math.round(getRandomInt(product.price)*100)}ish%</p>
      </span>
  
  </div>
 
        <div className="product-price">
        <div className='full-price'>${(((product.price)*getRandomInt(product.price))+product.price).toFixed(2)}</div>
           <p className='product-p1'> ${product.price}</p>
         
        </div>
           
        <div>
        <div className="same-day"> <p> Same Day-ish Shipping</p></div>
    
           <div className="return-label">FREE Returns</div>
        </div>
        <hr />
        
          <div className="about-label">About this item:</div>
          <ul className="about-list">
            <li>{product.description}</li>
          </ul>
              <div className='recommended'> <p>Similar products with free delivery on eligible orders below</p></div>
        </div>
        <div className="product-cart-details">
          
        <div className="product-price">
          
          <div className='full-price'>${(((product.price)*getRandomInt(product.price))+product.price).toFixed(2)}</div>
          <span className="price-symbol">$</span>
          <span className="product-price">{(product.price)}-ish</span>
        
        </div>
        <div>
        <img src={prime} alt="prime-logo" className="prime-logo"></img>
        <span className="prime-label">One-Day</span>
        </div>
        <div className="return-label">FREE Returns</div>
        <div className="delivery-label">
          FREE delivery <span className="delivery-date">{currentMonth} {Math.round(getRandomDay())}</span>
        </div>
        <div className="fastest-delivery">
          Or fastest delivery
          <span className="delivery-date"> {}</span> tomorrow-ish, December 17. Order within <span className="fast-delivery-hour">10 hours and 9 minutes </span>
         
        </div>
        <div className="stock-label"><p>Arrives before chrismas</p>
       
        <p>In Stock.</p>
        <p>Ships from Amazish.com</p>
        <p>Sold by Amazish.com</p>
        </div>
        <div className="product-stock">In Stock.</div>
        <form className="adding-product" onSubmit={handleSubmit}>
          <div className="quantity-select">
            <label className="product-label">
              <select
                className="count-quantity"
                value={`Qty: ${count}`}
                onChange={(e) => setCount(e.target.value)}
              >
                {quantities}
              </select>
            </label>
          </div>
          <input
            type="submit"
            className="add-to-cart"
            value="Add to Cart"
          ></input>
        </form>
        </div>  
    </div>
    

 <div className='rest-of-products'>
 
  {filter[2]}
 
   </div>
   <div className="review-section-container">
  
        <Reviews productId={productId} />
      </div>
</>
  );
};



export default DetailProductPage;

