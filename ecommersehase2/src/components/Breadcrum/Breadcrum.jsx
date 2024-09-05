import React from "react";
import "./Breadcrum.css";
import arrowIcon from "../assets/images/arrow-icon.png";
export const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrowIcon} width="30px" /> SHOP{" "}
      <img src={arrowIcon} width="30px" /> {product.category}{" "}
      <img src={arrowIcon} width="30px" /> {product.productName}
    </div>
  );
};
