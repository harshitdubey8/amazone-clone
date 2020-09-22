import React from "react";
import "./product.css";
import { useStateValue } from "./stateProvider";

function product({ title, image, price, rating }) {
  // const [state, dispatch] = useStateValue();
  // const addToBasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       title: title,
  //       image: image,
  //       price: price,
  //       rating: rating,
  //     },
  //   });
  // };

  return (
    <div className="products">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>add to basket</button>
    </div>
  );
}

export default product;
