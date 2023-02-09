import CartIndex from "./CartIndex";
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
      <><CartIndex key={i} product={cart[i]} /></>
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
            <CartIndex product={product} />
             <hr />
          </div>
  ));

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

  return (
    <>
       <div className="background-container">
      <div className="cart-background">
        {calculateCartSize() > 0 && (
          <>
            <div className="cart-container">
              <div className="cart-content">{listCart}</div>
              <div className="sub-total-container">
                Your total ({calculateCartSize()}{" "}
                {calculateCartSize() > 1 ? "items" : "item"}):&nbsp;
                <span className="sub-total-amt">${sum}</span>
              </div>
            </div>
            <div className="checkout-container">
              <div className="sub-total-container">
                Your total: ({calculateCartSize()}{" "}
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
              <div className="empty-item-cart">
              </div>
              <div>
                <p className="cart-empty-label">Your Cart is empty</p>
              </div>
            </div>
          </>
        )}
      </div>
    
    </div>
</>
  );
}

export default  ProductCart;
