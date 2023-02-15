
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CartIndex.css";
import { clearCart, updateQuantity } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";


function CartItem({ product }) { 
  const user = useSelector((state) => state.session.user?.id);
  const { id } = product;
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
      <div className="product-container-cart">
        <Link to={`/products/${id}`} target="_blank">
          <img className="product-image-cart" src={product.photoURL} alt="product"></img>
        </Link>
      </div>
      <div >
          <div >{product.title}</div>
                <select
                  className="cart-count-select"
                  value={`Qty: ${count}`}
                  onChange={(e) => setCount(e.target.value)}
                >
                    {totalQuantityions} 
                </select><button className="delete-button"
                onClick={(e) => {dispatch(clearCart(user, id));}}>Delete</button>   
            <div className="cart-item-delete-container">
            </div>
      </div>
      <div className="cart-item-price">${product.price.toFixed(2)}</div>
    </div>
    </>
  );
}

export default CartItem;
