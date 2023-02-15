## Background
<a href='https://amazon-clone-uls3.onrender.com' alt=''>Amazish</a> is a clone of amazon.com where a user can explore functionality very similar to the actual site. Just as amazon, you can traverse through an intuitive user interface, viewing products, viewing their listing pages, adding the items to cart, checking out and more! 

### 1 Hosting on Render (_less than a day_)

### 2. User Auth (_Around two days_)
     - Users can sign up, and log in to interact with functionality of the website 
     - Users can log out
     - Users can test the product with a demo login and interact with same functionality as when logged in

### 3. [Feature One:] Product Listings (_Around two days_)
      - Users can access all product listings
      - Individual product listings will link to their respective product pages

### 4. [Feature Two: CRUD] Product Search (_Around two days_)
      - A user can search and query back related products [READ]
      - Product searches can be filtered down and return back listings given those filters

### 5.  [Feature Three: CRUD] Shopping Cart (_Around two days_)
      - Users can add and view items from cart or remove items from the cart [CREATE, READ, DELETE]
      - Quantity of the products in the cart can be changed from the cart [UPDATE]

### 6. [Feature Four: CRUD] Product review (_Around two days_)
      - Users who have purchased a product can write or edit a product review [CREATE, UPDATE]
      - Reviews posted by other users can be viewed [READ]

### 7. Production Readme (_Around one day_)

## Technologies
- React.js - frontend components
- Redux.js - frontend state management
- Ruby on Rails - backend controller and routing
- Postgresql - database storage
- Amazon Web Services - cloud image storage

## Responsive page
<img src='https://github.com/IshsGit/amazon_clone/blob/main/frontend/src/assets/images/Screencast-from-12-15-2022-04_49_43-PM.gif' alt='' />
Responsive intuitive homepage for users to easily find a product for purchase just like the actual site.

## Filtering listings
<img src='https://github.com/IshsGit/amazon_clone/blob/main/frontend/src/assets/images/Screencast-from-12-16-2022-01_03_45-AM.gif' alt='' />
Filter listings by categories which query products based on the selected category such as electronics or toys. 

## Code snippets
```.js
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

  const productSearchDetails = productItems.map((productsD,idx) => {
    if(category.toLowerCase() === productsD.props.product.category.toLowerCase()|| (productsD.props.product.category.toLowerCase().includes(category.toLowerCase())) || (productsD.props.product.title.toLowerCase().includes(category.toLowerCase()))){
      return  <div key={idx} className='product-thumbnail' >
        <div className='product-container'>
          <div className='product-title'> <Link to={`/products/${products[idx].id}`}>{products[idx].title}</Link>
            <div className="product__rating">
              Rating:&nbsp;{Array(products[idx].rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>🌟</p> 
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
             <hr></hr>
      </div>
    } else{
      return <div key={idx}></div>
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
```.js
An intuitive way of fetching categories of the products and passing them across components for filtering

## Future updates
- Updating checkout page
- Adding review forms
- Adding account profile 
- Updating product listings and search query pages
