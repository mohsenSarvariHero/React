import React, { useContext } from "react";
import "../pages/Css/cart.css";
import { CartItems } from "../components/CartItems/CartItems";
export const Cart = () => {
  return (
    <div className="cart">
      <CartItems />
    </div>
  );
};
