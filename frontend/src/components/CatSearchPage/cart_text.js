import { useSelector, useDispatch } from 'react-redux';
import { getAllCartItems, reset } from '../../store/cart';
import CartItem from './CartItem';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getAllCartItems);

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
    dispatch(reset());
  }


export default Cart;