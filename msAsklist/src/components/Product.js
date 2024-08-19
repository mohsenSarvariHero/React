import React, { useState } from "react";
import "./product.css";
export const Product = ({ title, deletee, id }) => {
  const [isState, setIsState] = useState("false");
  const toggle = () => {
    setIsState((prev) => !prev);
  };
  return (
    <div className="product">
      <div>{isState && title}</div>
      <div>
        <button className="btn" onClick={toggle}>
          {isState === true ? "hide" : "show"}
        </button>
        <button className="btn" onClick={() => deletee(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
