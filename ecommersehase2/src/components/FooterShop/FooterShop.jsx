import React from "react";
import "./FooterShop.css";
import logo from "../assets/images/logo.jpg";
import instagram from "../assets/images/instagram.jpg";
import click from "../assets/images/click.png";
import whatsapp from "../assets/images/whatsapp.png";

export const FooterShop = () => {
  return (
    <div className="footershop">
      <div className="footershopper">
        <img src={logo} />
        <p>SHOPPER</p>
      </div>
      <ul className="footersocial">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footericon">
        <div className="footer-container">
          <img src={instagram} />
        </div>
        <div className="footer-container">
          <img src={click} />
        </div>
        <div className="footer-container">
          <img src={whatsapp} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved. </p>
      </div>
    </div>
  );
};
