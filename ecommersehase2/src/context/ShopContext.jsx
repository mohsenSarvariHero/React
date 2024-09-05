import React, { createContext, useState } from "react";
import { all_product as products } from "../components/assets/all-product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < products.length; index++) {
    cart[index] = 0;
  }
  return cart;
};
export const ShopContextprovider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const countitem = () => {
    let count = 0;
    for (const item in cartItems) {
      if(cartItems[item]>0){
        count += cartItems[item];
      }
      
    }
    return count
  };
  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    countitem,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
