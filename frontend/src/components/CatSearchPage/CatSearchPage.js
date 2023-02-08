
import { Link } from "react-router-dom";
import { useEffect } from "react";
import GetCat from "./ProductCat";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products';
import { fetchProducts } from '../../store/products';
import "./CategoryBar.css";

function CatSearchPage() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const getCat = products.map((product,idx) => {
    return <GetCat key={idx} product={product} />
  });

  const arr =Array(getCat.length)
  .fill()
  .map((_, i) => (
   getCat[i].props.product.category
  ));
  const rem = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const categories = arr.filter(rem);

  const catLinks = categories.map((category,idx) => (
    <Link className="category-link" key={idx} to={`/${category}`}>
      {category}
    </Link>
  ));

  return (
    <div className="category-bar-container">
      <Link className="category-link" key="products" to="/products">
        <Link className='all-products' to='/'>All Products </Link>
      </Link>
      {catLinks}
    </div>
  );
}

export default CatSearchPage