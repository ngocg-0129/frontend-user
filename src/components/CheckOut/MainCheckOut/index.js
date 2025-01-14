import React from "react";
import "./CheckOutForm.css";

function CheckoutForm() {
  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Contact</h2>
        <div className="form-group">
          <input type="email" placeholder="Email Address" />
          <p>
            Have an account? <a href="#">Create Account</a>
          </p>
        </div>

        <h2>Delivery</h2>
        <div className="form-group">
          <select>
            <option>Country / Region</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
          <div className="name-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Address" />
          <div className="city-postal">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postal Code" />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="save-delivery" />
          </div>
        </div>

        <h2>Payment</h2>
        <div className="form-group">
          <select>
            <option>Credit Card</option>
            <option>PayPal</option>
          </select>
          <input type="text" placeholder="Card Number" />
          <div className="card-details">
            <input type="text" placeholder="Expiration Date" />
            <input type="text" placeholder="Security Code" />
          </div>
          <input type="text" placeholder="Card Holder Name" />
          <div className="checkbox">
            <input type="checkbox" id="save-payment" />
          </div>
        </div>

        <button className="pay-now">Pay Now</button>
        <footer>
          <p>Copyright © 2022 FASCO. All Rights Reserved.</p>
        </footer>
      </div>

      <div className="checkout-right-content">
        Right
      </div>
    </div>
  );
}

export default CheckoutForm;
