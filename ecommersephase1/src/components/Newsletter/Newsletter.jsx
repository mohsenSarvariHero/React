import React from "react";
import "./Newsletter.css";
export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and story updated.</p>
      <form>
        <input type="email" placeholder="Your email id" />
        <button>subscribe</button>
      </form>
    </div>
  );
};
