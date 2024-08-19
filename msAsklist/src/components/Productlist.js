import React, { useState } from "react";
import { Product } from "./Product";
import "./productlist.css";
export const Productlist = ({ products, deletee }) => {
  return (
    <div className="product-list">
      {products.length === 0 && "no item to show"}
      {products.map((item) => {
        return <Product {...item} key={item.id} deletee={deletee} />;
      })}
    </div>
  );
};
