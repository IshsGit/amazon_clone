
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";
import { deleteFromCart, updateItemCount } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";

function CartItem({ product }) {
  const { id, name, price } = product;
  const [count, setCount] = useState(product.quantity);
  const userId = useSelector((state) => state.session.user?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateItemCount(id, count));
  }, [dispatch, count, id]);

  const range = [];
  for(let i=0; i<11; i++){
    range.push(i.toString());
  }

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
                </select>
            
              <button
                onClick={(e) => {dispatch(deleteFromCart(userId, id));}}>Delete</button>
        </div>
         <div>${price.toFixed(2)}</div>
    </div>
  );
}

export default CartItem;
