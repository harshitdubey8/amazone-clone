import React from "react";
import "./header.css";

import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">HELLO GUEST</span>
          <span className="header_optionLinetwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLinetwo"> &Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLinetwo">prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <span className="header_optionLinetwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default header;
