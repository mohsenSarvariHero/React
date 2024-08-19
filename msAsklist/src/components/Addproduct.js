import React, { useState } from "react";
import "./Addproduct.css";
export const Addproduct = ({ addTolist }) => {
  const [newProduct, setNewProduct] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    if (newProduct == " ") return;
    addTolist(newProduct);
    setNewProduct("");
  };
  return (
    <div>
      <form className="add-product-form" onSubmit={handleForm}>
        <div className="form-control">
          <label>add your item : </label>
          <input
            type="text"
            placeholder=" add your item ..."
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
          />
        </div>
        <button type="submit" className="form-btn">
          Add
        </button>
      </form>
    </div>
  );
};
