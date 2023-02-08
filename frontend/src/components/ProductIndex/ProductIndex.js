import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './search.css';
import { getProducts } from '../../store/products';
import { fetchProducts } from '../../store/products';
import { useParams, Link } from 'react-router-dom';
import "./mainpage.css";
import AllProducts from './products';
import ProductIndexItem from './ProductIndexItem';



const ProductIndex = () => {

  
  const {category}  = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);   
  function getRandomReviews(){
    const min = Math.ceil(1);
   const max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
   
  }
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productItems = products.map((product, idx) => {
    
    return <ProductIndexItem key={idx} product={product} 
    
    />
  });

  // const productDetails = products.map((product,idx) => {
    
  //   return <AllProducts key={idx} product={product} />
  // });


  // const productCat = products.map(product => {
    
  //   return <ProductGetCategory key={product.id} product={product} />
  // });

  // const productCat = products.map((product,idx) => {
  //   cathash[product.category] = idx;
  //   return product.category;
  // });







  const productSearchDetails = productItems.map((productsD,idx) => {
    
    if(category.toLowerCase() === productsD.props.product.category.toLowerCase()|| (productsD.props.product.category.toLowerCase().includes(category.toLowerCase())) || (productsD.props.product.title.toLowerCase().includes(category.toLowerCase()))){
      return  <>
      
      <div key={idx} className='product-thumbnail' >
      <div className='product-container'>
        <div className='product-title'> <Link to={`/products/${products[idx].id}`}>{products[idx].title}</Link>
        <div className="product__rating">
          Rating:&nbsp;{Array(products[idx].rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p> 
            ))} &nbsp;&nbsp;
            {Math.round(getRandomReviews())}
           <p>{Math.round(Math.random(1,1000))} reviews</p>
        </div>
        <div  className='product-desc'>About this item: {products[idx].description} </div>
   
        </div>
          <div className="tile-cat">
               {productItems[idx]}   

           </div>
           </div>
           
      </div>
      <hr></hr>
      </>
    } 
  });



  return (
    <>
   <section className="slider">
{productSearchDetails}
</section>
    </>
  );
};

export default ProductIndex;

