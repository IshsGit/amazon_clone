import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, getCart, deleteCart } from "../../store/cart";
import "./ProductCart.css";
import { useHistory } from "react-router-dom";

function ProductCart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const [sum, setSum] = useState(0.0);
  const cartItems = [];

  for(let i=0; i<cart.length; i++){
    cartItems.push(
      <><CartItem key={cart[i].id} product={cart[i]} /></>
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
    dispatch(fetchCart());
  }, [dispatch]);
  
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteCart());
    history.push("/carts/checkout");
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
      <p>Items in cart</p>
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
          <form onSubmit={handleSubmit}>
                <input
                  type="submit"
                  className="checkout-btn"
                  value="Proceed to Checkout"
                ></input>
              </form>
      </div>
    </div>
  );
}

export default  ProductCart;
