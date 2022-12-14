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


function DetailProductPage() {

  const dispatch = useDispatch();
  const {productId}  = useParams();
 
  const userId = useSelector((state) => state.session.user?.id);
  const product = useSelector(state => state.products[productId] ? state.products[productId] : {})
  const [count, setCount] = useState(1);
  const history = useHistory();
  const products = useSelector(getProducts);

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
  const productItems = products.map((product) => {
    
    return <ProductIndexItem key={product.id} product={product} />
  });

  const productDetails = products.map(product => {
    return <AllProducts key={product.id} product={product} />
  });

  const productCat = products.map(product => {
    return <ProductGetCategory key={product.id} product={product} />
  });

   const numArr = [];
   for(let i=0; i<11; i++){
      numArr.push(i.toString());
   }


  const quantities = numArr.map((idx) => {
      if(numArr[idx]==='0') 
        {return <option hidden key={numArr[idx]}>{`Qty: ${count}`}</option>;} 
      else 
        { return(<option value={numArr[idx]} key={numArr[idx]}> {numArr[idx]}  </option>)}
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      dispatch(addToCart(product.id, count));
    } else {
      history.push("/login");
    }
    setCount(1);
  };


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
              <p>????</p> 
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
        <div className="stock-label">In Stock.</div>
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="select-wrap">
            <label className="box-shadow">
              <select
                className="count-select"
                value={`Qty: ${count}`}
                onChange={(e) => setCount(e.target.value)}
              >
                {quantities}
              </select>
            </label>
          </div>
          <input
            type="submit"
            className="product-add-btn"
            value="Add to Cart"
          ></input>
        </form>
        </div>
           


        
           
    </div>
    <section className="tile-detail">
 
   


 {product.category === productCat[0].props.product.category && <div className="tile2-detail">
   <div className='tile-inner'>
   <h1>Revolutionary technology</h1>
   {productItems[0]}
  <span>
   <p>up to 19% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[0] }</h2>
   </div>
   </div>}
 
 
   {product.category === productCat[1].props.product.category && <div className="tile2-detail">
   <div className='tile-inner'>
   <h1>Very Merry Deals</h1>
   {productItems[1]}
  <span>
   <p>up to 24% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[1] }</h2>
   </div>
   </div>}

   {product.category === productCat[2].props.product.category && <div className="tile2-detail">
   <div className='tile-inner'>
   <h1>Deals on Amazon Devices</h1>
   {productItems[2]}
  <span>
   <p>up to 21% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[2] }</h2>
   </div>
   </div>}
 
   {product.category === productCat[3].props.product.category && <div className="tile2-detail" style={{marginRight: "2%"}}>
   <div className='tile-inner'>
   <h1>Very Merry Deals</h1>
   {productItems[3]}
  <span>
   <p>up to 50% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[3] }</h2>
   </div>
   </div>}
 </section>

 <div className='rest-of-products'>
 {product.category === productCat[4].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Very Merry Deals</h1>
   {productItems[4]}
  <span>
   <p>up to 37% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[4] }</h2>
   </div>
   </div>}

   {product.category === productCat[5].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Snap your chops, drop your peas</h1>
   {productItems[5]}
  <span>
   <p>up to 47% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[5] }</h2>
   </div>
   </div>}

   {product.category === productCat[6].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Every side is a square!</h1>
   {productItems[6]}
  <span>
   <p>up to 39% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[6] }</h2>
   </div>
   </div>}

   {product.category === productCat[7].props.product.category&& <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Shop gifts at any price</h1>
   {productItems[7]}
  <span>
   <p>up to 17% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[7] }</h2>
   </div>
   
   </div>}

   {product.category === productCat[8].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>It's holiday-party time</h1>
   {productItems[8]}
  <span>
   <p>up to 16% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[8] }</h2>
   </div>
   </div>}
  
   {product.category ===productCat[9].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Deals on last-minute gifts</h1>
   {productItems[9]}
  <span>
   <p>up to 18% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[9] }</h2>
   </div>
   </div>
   }
   {product.category ===productCat[10].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Deals on last-minute gifts</h1>
   {productItems[10]}
  <span>
   <p>up to 18% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[10] }</h2>
   </div>
   </div>}
   {product.category ===productCat[11].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Deals on last-minute gifts</h1>
   {productItems[11]}
  <span>
   <p>up to 18% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[11] }</h2>
   </div>
   </div>}
   {product.category ===productCat[12].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Deals on last-minute gifts</h1>
   {productItems[12]}
  <span>
   <p>up to 18% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[12] }</h2>
   </div>
   </div>}
   {product.category ===productCat[13].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Deals on last-minute gifts</h1>
   {productItems[13]}
  <span>
   <p>up to 18% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[13] }</h2>
   </div>
   </div>}
   {product.category ===productCat[14].props.product.category && <div className="tile2-detail" style={{marginTop:"5%", marginRight:"3%"}}>
   <div className='tile-inner'>
   <h1>Deals on last-minute gifts</h1>
   {productItems[14]}
  <span>
   <p>up to 18% off</p>
  <p> Top deal</p>
  </span>
   <h2>{productDetails[14] }</h2>
   
   </div>
   
   </div>}
   

   </div>
</>
  );
};



export default DetailProductPage;


