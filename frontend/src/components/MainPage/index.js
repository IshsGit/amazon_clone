import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PostForm  from './PostForm';

import { getProducts } from '../../store/products';
import { fetchProducts } from '../../store/products';

import {SliderData} from "./SliderData"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import "./mainpage.css";
import AllProducts from './products';
import ProductIndexItem from './ProductIndexItem';
/*
Export as the default a `PostIndex` component that renders a list (`ul`) of
`PostIndexItems`. This component should grab the `posts` slice of state from the
store. It should also fetch the posts from the backend after the first render.
(You should be able to handle the case where the store is empty--`{}`--on first
render.) Below the `ul`, render a new post form.
*/

const MainPage = ({slides}) => {

  const dispatch = useDispatch();
  
  const products = useSelector(getProducts);
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    console.log(current)
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

  // const productDetails = AllProducts.map(product => {
  //   return <ProductIndexItem key={product.id} product={product} />
  // });

  if(!Array.isArray(slides) || slides.length <=0){
    return null;
  }


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

<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
<FaArrowAltCircleRight className="right-arrow"  onClick={nextSlide}/>
{
SliderData.map((slide, index)=>{
    return(
        <div className={index === current ? 'slide active' : 'slide' } key={index}>
            {index===current && ( <img className="image" src={slide.image} alt='product' />)}
         
        </div>

    )
})

}
<section className="sometext">
 



<div className="tile2">
  <div className='tile-inner'>
  <h1>Revolutionary technology</h1>
  {productItems[0]}
 <span>
  <p>up to 19% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[0] }</h2>
  </div>
  </div>


<div className="tile2">
  <div className='tile-inner'>
  <h1>Very Merry Deals</h1>
  {productItems[1]}
 <span>
  <p>up to 24% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[1] }</h2>
  </div>
  </div>
  <div className="tile2">
  <div className='tile-inner'>
  <h1>Deals on Amazon Devices</h1>
  {productItems[2]}
 <span>
  <p>up to 21% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[2] }</h2>
  </div>
  </div>

<div className="tile2" style={{marginRight: "2%"}}>
  <div className='tile-inner'>
  <h1>Very Merry Deals</h1>
  {productItems[3]}
 <span>
  <p>up to 50% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[3] }</h2>
  </div>
  </div>
</section>
<div className='rest-of-products'>
<div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
  <div className='tile-inner'>
  <h1>Very Merry Deals</h1>
  {productItems[4]}
 <span>
  <p>up to 37% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[4] }</h2>
  </div>
  </div>
  <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
  <div className='tile-inner'>
  <h1>Snap your chops, drop your peas</h1>
  {productItems[5]}
 <span>
  <p>up to 47% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[5] }</h2>
  </div>
  </div>
  <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
  <div className='tile-inner'>
  <h1>Every side is a square!</h1>
  {productItems[6]}
 <span>
  <p>up to 39% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[6] }</h2>
  </div>
  </div>
  <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
  <div className='tile-inner'>
  <h1>Shop gifts at any price</h1>
  {productItems[7]}
 <span>
  <p>up to 17% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[7] }</h2>
  </div>
  
  </div>
  <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
  <div className='tile-inner'>
  <h1>It's holiday-party time</h1>
  {productItems[8]}
 <span>
  <p>up to 16% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[8] }</h2>
  </div>
  </div>
 
  <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
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
  <div className="tile2" style={{marginTop:"5%", marginRight:"3%"}}>
 
  </div>
  </div>

</section>
    </>
  );
};

export default MainPage;

