import React, { Children } from "react";

interface prop {
  children: string;
  onClick: () => void;
  color?: "danger" | "primary" | "alert";
}
export const Button = ({ children, onClick, color }: prop) => {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
