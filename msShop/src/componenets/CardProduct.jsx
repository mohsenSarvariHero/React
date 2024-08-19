import React, { useContext } from "react";
import { getProductData, productList } from "../data/items";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

export const CardProduct = ({ id, quantity }) => {
  const data = getProductData(id);
  const card = useContext(CartContext);
  let sum = 0;
  return (
    <>
      <h3>{data.title}</h3>
      <h3> تعداد : {quantity}</h3>
      <h3> قیمت : {data.price * quantity}</h3>

      <Button
        onClick={() => card.deleteFromCart(id)}
        size="sm"
        variant="btn btn-outline-secondary"
        className="mb-5 text-white"
      >
        حذف از سبد خرید
      </Button>
    </>
  );
};
