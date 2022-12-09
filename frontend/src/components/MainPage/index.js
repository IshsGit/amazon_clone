import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PostForm  from './PostForm';
import ProductIndexItem from './ProductIndexItem';
import { getProducts } from '../../store/products';
import { fetchProducts } from '../../store/products';

/*
Export as the default a `PostIndex` component that renders a list (`ul`) of
`PostIndexItems`. This component should grab the `posts` slice of state from the
store. It should also fetch the posts from the backend after the first render.
(You should be able to handle the case where the store is empty--`{}`--on first
render.) Below the `ul`, render a new post form.
*/

const MainPage = () => {
  const dispatch = useDispatch();
  
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productItems = products.map(product => {
    return <ProductIndexItem key={product.id} product={product} />
  });

  return (
    <>
      <ul>
       
        {productItems}
      </ul>
  
    </>
  );
};

export default MainPage;

