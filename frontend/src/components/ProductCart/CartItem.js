
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";
import { clearCart, updateQuantity } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";

function CartItem({ product }) {
  const { id, name, price } = product;
  const [count, setCount] = useState(product.quantity);
  const userId = useSelector((state) => state.session.user?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateQuantity(id, count));
  }, [dispatch, count, id]);

  const range = [];
  for(let i=0; i<11; i++){
    range.push(i.toString());
  }


  const totalQuantityions = Array.from({length: 10}, (x, i) => i).map((num) => {
    if (num === 0) {
      return <option hidden key={num}>{`Qty: ${count}`}</option>;
    } else {
      return (<option value={num} key={num}>{num}</option>);
    }
  });


  return (
    <div className="cart-item-container">
        <Link to={`/products/${id}`}>
          <img src={product.photoURL} alt="product"></img>
        </Link>
          <div>{name}</div>
          <div className="cart-stock-label">In Stock</div>
          <div className="cart-eligible">
            Eligble for FREE Shipping & <span>FREE Returns</span>
          </div>
          <form className="cart-form">
            <input type="checkbox"></input>
            <label>
              {" "}
      
            </label>
          </form>
          <div>
                <select
                  value={`Qty: ${count}`}
                  onChange={(e) => setCount(e.target.value)}>
                    {(range.map((qty)=>(qty===0) ? (<option hidden key={qty}>{`Qty: ${count}`}</option>) : (<option value={qty} key={qty}>{qty}</option> )))}
                    {totalQuantityions}
                </select>
            
              <button
                onClick={(e) => {dispatch(clearCart(userId, id));}}>Delete</button>
        </div>
         <div>${price.toFixed(2)}</div>
         
    </div>
  );
}

export default CartItem;
