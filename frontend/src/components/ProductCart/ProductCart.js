import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getCarts, deleteCart } from "../../store/cart";
import "./ProductCart.css";
import { useHistory } from "react-router-dom";

function ProductCart() {
  const cart = useSelector(getCarts);
  const dispatch = useDispatch();
  const [sum, setSum] = useState(0.0);
  const cartItems = [];

  for(let i=0; i<cart.length; i++){
    cartItems.push(
      <><CartItem key={i} product={cart[i]} /></>
    )
  }
  
  let total = 0;
  let size= 0;
  
  useEffect(() => {
    for(let i=0; i<cart.length;i++){
      total = total + cart[i].quantity * cart[i].price;
    }
    setSum(((total * 100) / 100).toFixed(2));
  });

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteCart());
    history.push("/carts/checkout");
  };

  const listCart = cart.map((product,idx) => (
          <div key={idx}>
            <CartItem product={product} />
             <hr />
          </div>
     
   
  ));

  useEffect(() => {
    calculateSubTotal();
  });

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const calculateCartSize = () => {
    let size = 0;
    cart.forEach((product) => {
      size += product.quantity;
    });
    return size;
  };

  const calculateSubTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity * product.price;
    });
    setSum(Math.round(total * 100) / 100);
  };


  return (
    <>
       <div className="background-container">
      <div className="cart-background">
        {calculateCartSize() > 0 && (
          <>
            <div className="cart-container">
              <div className="cart-label">Shopping Cart</div>
              <div className="cart-price-label">Price</div>
              <hr className="top-border" />
              <div className="cart-content">{listCart}</div>
              <div className="sub-total-container">
                sum ({calculateCartSize()}{" "}
                {calculateCartSize() > 1 ? "items" : "item"}):&nbsp;
                <span className="sub-total-amt">${sum}</span>
              </div>
            </div>
            <div className="checkout-container">
              <div className="sub-total-container">
                sum ({calculateCartSize()}{" "}
                {calculateCartSize() > 1 ? "items" : "item"}):&nbsp;
                <span className="sub-total-amt">${sum}</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="submit"
                  className="checkout-btn"
                  value="Proceed to Checkout"
                ></input>
              </form>
            </div>
          </>
        )}
        {calculateCartSize() < 1 && (
          <>
            <div className="empty-cart-container">
              <div className="cart-empty-image-container">
              
              </div>
              <div className="cart-empty-label-container">
                <p className="cart-empty-label">Your Cart is empty</p>
              </div>
            </div>
          </>
        )}
      </div>
    
    </div>
    {/* <div className="cart-page">
      <div className="cart-container">
     
     
        <div>{cartItems}</div>
        <div>
          total ({cart.forEach((product) => (size += product.quantity ))}{" "}
          {cart.forEach((product) => (size += product.quantity )) > 1 ? "items" : "item"})
         <div>:&nbsp;${sum}</div>
        </div>

      </div>
      <div className="checkout-page">
          total ({cart.forEach((product) => (size += product.quantity ))}:&nbsp{cart.forEach((product) => (size += product.quantity )) > 1 ? "items" : "item"}):&nbsp;
          <span className="sub-total-amt">${sum}</span>
        
          
      </div>
    </div>
    <form onSubmit={handleSubmit}>
    <input
      type="submit"
      className="checkout-btn"
      value="Proceed to Checkout"
    ></input>
</form> */}
</>
  );
}

export default  ProductCart;
