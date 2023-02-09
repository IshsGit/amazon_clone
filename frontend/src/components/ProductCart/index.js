
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CartIndex.css";
import { clearCart, updateQuantity } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import prime from "../../assets/prime.png";

function CartIndex({ product }) { 
  const user = useSelector((state) => state.session.user?.id);
  const { id, name, price } = product;
  const dispatch = useDispatch();
  const [count, setCount] = useState(product.quantity);

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
   <>
   <div className="cart-item-container">
      <div className="cart-item-image-container">
        <Link to={`/products/${id}`} target="_blank">
          <img className="cart-item-image" src={product.photoURL} alt="product"></img>
        </Link>
      </div>
      <div className="item-center-container">
        <div className="item-name-container">
          <div className="cart-item-name">{product.title}</div>
         
          <div className="prime"><img src={prime} alt="prime-logo" className="prime-logo"></img></div>
          
     
          <div className="quantity-section">
            <div className="quantity">
              <label className="box-shadow">
                <select
                  className="cart-count-select"
                  value={`Qty: ${count}`}
                  onChange={(e) => setCount(e.target.value)}
                >
                    {totalQuantityions}
                </select>
              </label>
            </div>
            <div className="cart-item-delete-container">
            <button
                onClick={(e) => {dispatch(clearCart(user, id));}}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-item-price">${product.price.toFixed(2)}</div>
    </div>
   
    </>
    
  );
}

export default CartIndex;
