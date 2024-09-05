import React from "react";
import "./Css/Login.css";
export const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-field">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignupL">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="check">
          <input type="checkbox" />
          <p>By countinuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
