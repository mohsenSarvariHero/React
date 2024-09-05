import React from "react";
import hand_icon from "../assets/images/hand-icon.png";
import arrow_icon from "../assets/images/arrow-icon.png";
import hero_image from "../assets/images/hero-image.png";
import "./Hero.css";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVES ONLY</h2>
        <div>
          <div className="hero-left-new">
            <p>new</p>
            <img src={hand_icon} width="105px" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="btn">
          <div>Latest Collection</div>
          <img style={{ background: "none" }} src={arrow_icon} width="50px" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} />
      </div>
    </div>
  );
};
