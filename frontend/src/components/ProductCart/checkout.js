import "./checkout.css";
import checkmark from "./checkmark.png"
function CheckoutPage() {
  
  return (
    <>
    <div className="cart-container">
            <img className="checkmark" src={checkmark} alt="checkout-confirmed"></img>{" "}
            <span className="checkout-msg">Thank you, your order has been placed</span>
          <div className="checkout-email">Please check your email for order confirmation and detailed delivery information</div>
    </div>
    </>
  );
}
export default CheckoutPage;
