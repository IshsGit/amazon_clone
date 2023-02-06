import "./checkout.css";
import checkmark from "./checkmark.png"
function CheckoutPage() {
  
  return (
    <>
    <div className="cart-container">
      <div className="checkout-confirm-container">
       
        <div className="checkout-label-container">
          <div className="order-placed">
            
            <img
              className="confirmed-image"
              src={checkmark}
              alt="checkout-confirmed"
            ></img>{" "}
            <span className="checkout-label">Thank you, your order has been placed
           
            </span>
          </div>
          <div className="checkout-message">Please check your email for order confirmation and detailed delivery information</div>
        </div>
      </div>
      
    </div>
    </>
  );
}
export default CheckoutPage;
