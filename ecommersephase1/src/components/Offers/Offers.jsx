import React from "react";
import "./Offers.css";
import offer_image from "../assets/images/offer-image2.png";
export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={offer_image} />
      </div>
    </div>
  );
};
