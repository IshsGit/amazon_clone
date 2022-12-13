import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PostForm  from './PostForm';
import ProductIndexItem from './ProductIndexItem';
import { getProducts } from '../../store/products';
import { fetchProducts } from '../../store/products';
import Carousel from 'better-react-carousel';
import {SliderData} from "./SliderData"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import "./mainpage.css";
import AllProducts from './products';
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

  const productItems = products.map(product => {
    
    return <ProductIndexItem key={product.id} product={product} />
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
  <h1>Very Merry Deals</h1>
  {productItems[0]}
 <span>
  <p>up to 50% off</p>
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
  <p>up to 50% off</p>
 <p> Top deal</p>
 </span>
  <h2>{productDetails[1] }</h2>
  </div>
  </div>
  <div className="tile2">
  <div className='tile-inner'>
  <h1>Very Merry Deals</h1>
  {productItems[2]}
 <span>
  <p>up to 50% off</p>
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

</section>
    </>
  );
};

export default MainPage;

