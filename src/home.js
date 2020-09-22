import React from "react";
import "./home.css";
import Product from "./product";

function home() {
  return (
    <div className="home">
      <div className="home_continer">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Fashion/Diwali-Wave1/teaser/Header/PC-Topbanner_eng_02._CB452696737_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="Toster"
            image="https://images-na.ssl-images-amazon.com/images/I/41IF4qzFnEL._AC_SY200_.jpg"
            price={55}
            rating={5}
          />
          <Product
            title="GAMEPAD"
            image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
            price={5.5}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="MINECRAFT"
            image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._AC_SY220_.jpg"
            price={55}
            rating={5}
          />
          <Product
            title="WATCH"
            image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
            price={55}
            rating={5}
          />
          <Product
            title="GAME"
            image="https://images-na.ssl-images-amazon.com/images/I/710JXdscVsL._AC_SY220_.jpg"
            price={55}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="Toster"
            image="https://images-na.ssl-images-amazon.com/images/I/41IF4qzFnEL._AC_SY200_.jpg"
            price={55}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default home;
