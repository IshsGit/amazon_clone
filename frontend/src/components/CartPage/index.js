import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { fetchCart, getCart, clearCart } from "../../store/cart";
import CartItem from "./CartItem";
import "./CartPage.css";

function CartPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const [subTotal, setSubtotal] = useState(0.0);
  console.log("in cart page")
  const listCart = cart.map((product) => (
    <>
      <CartItem key={product.id} product={product} />
      <hr />
    </>
  ));

  useEffect(() => {
    calculateSubTotal();
  });

  useEffect(() => {
    dispatch(fetchCart());
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
    setSubtotal(Math.round(total * 100) / 100);
  };

  return (
    <div className="cart-background">
      <div className="cart-container">
        <div className="cart-label">Shopping Cart</div>
        <div className="cart-price-label">Price</div>
        <hr className="top-border" />
        <div className="cart-content">{listCart}</div>
        <div className="sub-total-container">
          Subtotal ({calculateCartSize()}{" "}
          {calculateCartSize() > 1 ? "items" : "item"}):&nbsp;
          <span className="sub-total-amt">${subTotal}</span>
        </div>
      </div>
      <div className="checkout-container">
        <div className="sub-total-container">
          Subtotal ({calculateCartSize()}{" "}
          {calculateCartSize() > 1 ? "items" : "item"}):&nbsp;
          <span className="sub-total-amt">${subTotal}</span>
        </div>
        <form onSubmit={(e) => dispatch(clearCart())}>
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

export default CartPage;
