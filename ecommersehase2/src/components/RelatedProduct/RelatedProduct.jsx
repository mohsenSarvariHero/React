import React from "react";
import "./RelatedProduct.css";
import { data } from "../assets/data";
import { Item } from "../Items/Item";
export const RelatedProduct = () => {
  return (
    <div className="relatedproduct">
        <h1>Related Product</h1>
        <hr />
      <div className="relatedproduct-text">
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.productName}
              image={item.productImage}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
