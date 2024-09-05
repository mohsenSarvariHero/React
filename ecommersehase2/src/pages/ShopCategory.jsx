import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./Css/ShopCategory.css";
import { Item } from "../components/Items/Item";
import dropdown from "../components/assets/images/dropdown.png";
export const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);
  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" />
      <div className="shopcategorty-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} height="50px" />
        </div>
      </div>
      <div className="shopItem">
        {products.map((item, i) => {
          if (item.category === props.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};
