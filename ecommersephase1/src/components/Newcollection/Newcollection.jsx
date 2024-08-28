import React from "react";
import "./Newcollection.css";
import { newCollection } from "../assets/newCollection";
import { Item } from "../Items/Item";
export const Newcollection = () => {
  return (
    <div className="newcollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="newcollection-image">
        {newCollection.map((item, i) => {
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
