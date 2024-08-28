import React from "react";
import "./Css/Login.css";
export const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="login-container">
        <form>
          <h2>Login</h2>
          <input type="email" placeholder="Emal address" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
          <p>
            Create an account?<span>Click here</span>
          </p>
          <div className="check">
            <input type="checkbox" />
            <p>By countinuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </form>
      </div>
    </div>
  );
};
