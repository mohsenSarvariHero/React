import React, { useState } from "react";
import { createContext } from "react";
import { getProductData } from "../data/items";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = cartProduct.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addItemToCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProduct([...cartProduct, { id: id, quantity: 1 }]);
    } else {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartProduct((cartProduct) =>
      cartProduct.filter((item) => {
        return item.id != id;
      })
    );
  };
  const removeItemFromCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const getTotalAmount = () => {
    let totalAmout = 0;
    cartProduct.map((item) => {
      const productData = getProductData(item.id);
      totalAmout += productData.price * item.quantity;
    });
    return totalAmout;
  };

  const ContextValue = {
    items: cartProduct,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };
  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
};
