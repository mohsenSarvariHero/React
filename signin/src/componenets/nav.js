import React from "react";
import "../assets/css/index.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div>
      <nav>
        <a href="#">
          <Link to="/signn">LogIn</Link>
        </a>
        <a href="#">
          <Link to="/">Home</Link>
        </a>
        <a href="#">Language Department</a>
        <a href="#">computer Department</a>
      </nav>
    </div>
  );
};
