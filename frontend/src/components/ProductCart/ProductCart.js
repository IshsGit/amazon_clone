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


  // const cartItems = [];

  // for(let i=0; i<cart.length; i++){
  //   cartItems.push(
  //     <><CartIndex key={i} product={cart[i]} /></>
  //   )
  // }
  
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteCart());
    history.push("/carts/checkout");
  };
  
  useEffect(() => {
    addtotal();
   
  });

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  

  const addtotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity * product.price;
    });
    setSum(((Math.round(total * 100) / 100)).toFixed(2));
  }



  const listCart = cart.map((product, idx) => (
    <div key={idx}>
      <CartIndex  product={product} />
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
       <div >
      <div className="cart-grid">
        { calculateCartSize() > 0 && <div>
            <div className="cart-container">
              {listCart} Your total ({ calculateCartSize()}{" "}
                { calculateCartSize() > 1 ? "items" : "item"})${sum}
            </div>
            <div className="checkout-page-cart">
              <div className="total-cost">
                Your total: ({ calculateCartSize()}{" "}
                { calculateCartSize() > 1 ? "items" : "item"})
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
         </div>}
          <div>
            { calculateCartSize() < 1 && <div className="show-no-cart">
              <div className="checkout-cart">
              </div>
              <div>
                <div className="empty-cart-msg">Your Cart is empty</div>
              </div>
            </div>}
          </div>
        
      </div>
    </div>
</>
  );
}

export default  ProductCart;
