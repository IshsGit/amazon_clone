import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PostForm  from './PostForm';

import { getProducts } from '../../store/products';
import { fetchProducts } from '../../store/products';
import { useParams, Link } from 'react-router-dom';
import "./mainpage.css";
import AllProducts from './products';
import ProductIndexItem from './ProductIndexItem';
import ProductGetCategory from './productGetCategory';


const ProductIndex = () => {

  
  const {category}  = useParams();

  const dispatch = useDispatch();
  
  const products = useSelector(getProducts);   
   
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productItems = products.map((product, idx) => {
    
    return <ProductIndexItem key={product.id} product={product} 
    
    />
  });

  const productDetails = products.map(product => {
    
    return <AllProducts key={product.id} product={product} />
  });


  const productCat = products.map(product => {
    
    return <ProductGetCategory key={product.id} product={product} />
  });


const filter = (idx) => {return (category.toLowerCase() === productDetails[idx].props.product.category.toLowerCase()) || (productDetails[idx].props.product.category.toLowerCase().includes(category.toLowerCase())) || (productDetails[idx].props.product.title.toLowerCase().includes(category.toLowerCase()))}

  return (
    <>
   <section className="slider">




<section className="some-cat">
 
{ ((category.toLowerCase() === productDetails[0].props.product.category.toLowerCase()) || (productDetails[0].props.product.category.toLowerCase().includes(category.toLowerCase())) || (productDetails[0].props.product.title.toLowerCase().includes(category.toLowerCase())))  && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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

  { ((category.toLowerCase() === productDetails[1].props.product.category.toLowerCase()) || (productDetails[1].props.product.category.toLowerCase().includes(category.toLowerCase())) || (productDetails[1].props.product.title.toLowerCase().includes(category.toLowerCase()))) &&  <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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

  { ((category.toLowerCase() === productDetails[2].props.product.category.toLowerCase()) || (productDetails[2].props.product.category.toLowerCase().includes(category.toLowerCase())) || (productDetails[2].props.product.title.toLowerCase().includes(category.toLowerCase()))) &&   <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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

  { ((category.toLowerCase() === productDetails[3].props.product.category.toLowerCase()) || (productDetails[3].props.product.category.toLowerCase().includes(category.toLowerCase())) || (productDetails[3].props.product.title.toLowerCase().includes(category.toLowerCase()))) &&  <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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


{ ((category.toLowerCase() === productDetails[4].props.product.category.toLowerCase()) || (productDetails[4].props.product.category.toLowerCase().includes(category.toLowerCase())) || (productDetails[4].props.product.title.toLowerCase().includes(category.toLowerCase()))) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
  <div className='tile-inner'>
  <h1>Very Merry Deals</h1>
  {productItems[4]}
 <span>
  <p>up to 37% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[4] }</h2>
  </div>
  </div> }
  
  
  { ((category.toLowerCase() === productDetails[5].props.product.category.toLowerCase()) || (productDetails[5].props.product.category.toLowerCase().includes(category.toLowerCase())) || (productDetails[5].props.product.title.toLowerCase().includes(category.toLowerCase()))) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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
  { ((category.toLowerCase() === productDetails[6].props.product.category.toLowerCase()) || (productDetails[6].props.product.category.toLowerCase().includes(category.toLowerCase())) || (productDetails[6].props.product.title.toLowerCase().includes(category.toLowerCase()))) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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
  { filter(7) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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
  { filter(8) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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
 
  { filter(9) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
  <div className='tile-inner'>
  <h1>Deals on last-minute gifts</h1>
  {productItems[9]}
 <span>
  <p>up to 18% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[9] }</h2>
  </div>
  </div>}
 
  { filter(10) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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
  { filter(11) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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
  { filter(12) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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
  { filter(13) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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
  { filter(14) && <div className="tile-cat" style={{backgroundColor:'#eaeded'}}>
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
  
  

</section>
</section>
    </>
  );
};

export default ProductIndex;

