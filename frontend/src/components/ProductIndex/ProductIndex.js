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
/*
Export as the default a `PostIndex` component that renders a list (`ul`) of
`PostIndexItems`. This component should grab the `posts` slice of state from the
store. It should also fetch the posts from the backend after the first render.
(You should be able to handle the case where the store is empty--`{}`--on first
render.) Below the `ul`, render a new post form.
*/

const ProductIndex = () => {

  
  const {category}  = useParams();
  console.log("category")
  console.log(category)
  const dispatch = useDispatch();
  
  const products = useSelector(getProducts);
    const [current, setCurrent] = useState(0);
   

    
   
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

  // const productDetails = AllProducts.map(product => {
  //   return <ProductIndexItem key={product.id} product={product} />
  // });



//   <div className="tile2">
//   <div className='tile-inner'>
//   <h1>Very Merry Deals</h1>
//   {productItems[0]}
//  <span>
//   <p>up to 50% off</p>
//  <p> Top deal</p>
//  </span>
//   <h2>{productDetails[0] }</h2>
//   </div>
//   </div>

  return (
    <>
   <section className="slider">




<section className="sometext">
 



{ category === productDetails[0].props.product.category && <div className="tile2">
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

  { category === productDetails[1].props.product.category &&  <div className="tile2">
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

  { category === productDetails[2].props.product.category &&   <div className="tile2">
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

  { category === productDetails[3].props.product.category &&  <div className="tile2" style={{marginRight: "2%"}}>
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
{ category === productDetails[4].props.product.category && <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
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
  
  
  { category === productDetails[5].props.product.category && <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
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
  { category === productDetails[6].props.product.category && <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
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
  { category === productDetails[7].props.product.category && <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
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
  { category === productDetails[8].props.product.category && <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
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
 
  { category === productDetails[9].props.product.category && <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
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
  
  </div>

</section>
    </>
  );
};

export default ProductIndex;

