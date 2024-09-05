import React from "react";
import "./Popular.css";
import { data } from "../assets/data";
import { Item } from "../Items/Item";
export const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in wommen</h1>
      <hr />
      <div className="popular-item">
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
