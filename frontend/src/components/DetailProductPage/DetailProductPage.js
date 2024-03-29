import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link, } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
  const {category}  = useParams();
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

  
  // Random num gen, to be updated 
  function getRandomInt(price) {
    const min = Math.ceil(.75);
    const max = Math.floor(.15);
    const randomNum = (Math.random(min,max));
    const fullPrice = price*1.25;
    return fullPrice; 
  };

  function getRandomReviews(){
    const min = Math.ceil(1);
   const max = Math.floor(1000);
   const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return 2*3;
  }

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  let currentMonth = month[d.getMonth()];

  function getRandomDay(){
    const max = Math.ceil(28);
    const min = Math.floor(16);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
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

   //needs unique key

  const quantities = numArr.map((num,idx) => {
    
      if(numArr[num]==='0') 
        {return <option key={idx}>{`Qty: ${count}`}</option>;} 
      else 
        { return(<option value={numArr[num]} key={idx}> {numArr[num]}  </option>)}
  });

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) 
      dispatch(addToCart(product.id, count));
     else 
      history.push("/login");
    setCount(1);
  };

 function refreshPage() {
  // window.location.reload(false);
};

const productlistings = products.map((item,idx) => {
  if(product.category === productCat[idx].props.product.category && item!==product){
    
    return <div key={idx} className="tile2-detail" style={{marginTop:"2%", marginRight:"3%"}}>
              <div className='tile-inner' >
                <div className='tile-inner-box-thumbnail'>
                  <button className='similar-products' type="button" onClick={ refreshPage } style={{border: "none",  padding: 0,  background: "none"}}>
                      <div className='similar-thumbnail'>{productItems[idx]}</div>
                  </button>       
                </div>
                <button className='similar-products' type="button" onClick={ refreshPage } style={{border: "none",  padding: 0,  background: "none"}}> 
                 <div> {productDetails[idx] }</div>
                </button> 
              </div>
            </div>
  } else{
    return <div key={idx}></div>
  }
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
          Rating:&nbsp;{Array(product.rating).fill().map((_, idx) => (
              <p key={idx}>🌟</p> 
            ))} &nbsp;&nbsp;
            {Math.round(getRandomReviews())}
           <p>{Math.round(Math.random(1,1000))} ratings </p> <div className='read-review'>Read or write a review below!</div>
        </div>
      <p>Brand: Zish Services</p>
        <hr></hr>
      
  <div className='tile-inner'>
  
      <span>
       <p>Top deal</p>
      <p> -{Math.round(getRandomInt(product.price))}ish%</p>
      </span>
  
  </div>
 
        <div className="product-price">
        <div className='full-price'>${getRandomInt(product.price).toFixed(2)}</div>
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
          
          <div className='full-price'>${getRandomInt(product.price).toFixed(2)}</div>
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
          <span className="delivery-date"> {}</span> tomorrow-ish. Order within <span className="fast-delivery-hour">10 hours and 9 minutes </span>
         
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
 { productlistings}

 
   </div>
   <div className="review-section-container">
  
        <Reviews productId={productId} />
      </div>
</>
  );
};



export default DetailProductPage;

