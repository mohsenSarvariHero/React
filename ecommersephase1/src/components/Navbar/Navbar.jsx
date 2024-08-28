import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.jpg";
import cart_icon from "../assets/images/carticon.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} width="88px" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop{" "}
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li onClick={() => setMenu("men")}>
          <Link to="/men" style={{ textDecoration: "none" }}>
            {" "}
            Men{" "}
          </Link>{" "}
          {menu === "men" ? <hr /> : <></>}
        </li>

        <li onClick={() => setMenu("wommen")}>
          <Link to="/wommen" style={{ textDecoration: "none" }}>
            {" "}
            Wommen{" "}
          </Link>{" "}
          {menu === "wommen" ? <hr /> : <></>}
        </li>

        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            {" "}
            Kids{" "}
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          {" "}
          <button>Login</button>{" "}
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} width="80px" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
