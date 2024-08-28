import React, { createContext } from "react";
import { all_product as products } from "../components/assets/all-product";

export const ShopContext = createContext(null);

export const ShopContextprovider = (props) => {
  const contextValue = { products };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
