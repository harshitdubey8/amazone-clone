import React from "react";
import "./checkout.css";
import Subtotal from "./subtotal.js";
function checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt=""
        />
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default checkout;
