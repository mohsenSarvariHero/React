import React, { useState } from "react";
import "../assets/css/index.css";
import { useChanger } from "./hook/useChanger";
// import "../assets/js/index.js";
export const SignIn = () => {
  const { changerSide } = useChanger();
  return (
    <>
      <main>
        <section id="left-section">
          <div id="left-1">
            <h1>Sign In</h1>
            <div className="social-btn">
              <button className="btn btn-circle btn-facebook  text-white bold  btn-big">
                f
              </button>
              <button className="btn btn-circle btn-google text-white bold btn-big">
                G+
              </button>
              <button className="btn btn-circle btn-linkdin text-white bold btn-big">
                in
              </button>
            </div>

            <p>or use your account</p>
            <input type="email" name="email" id="" placeholder="Email" />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <a href="#">Forgot your password?</a>
            <input type="submit" value="Sign In" />
          </div>
          <div id="left-2">
            <h1>Welcome back , Friend!</h1>
            <p>
              enter your account information in sign in <br /> and continue your
              journy with us
            </p>
            <button className="controler bg-red" onClick={changerSide}>
              Sign In{" "}
            </button>
          </div>
        </section>
        <section className="bg-red" id="right-section">
          <div id="right-1">
            <h1>Hello , friend</h1>
            <p>
              enter your personal details and start <br /> journy with us
            </p>
            <button className="controler bg-red" onClick={changerSide}>
              Sign Up{" "}
            </button>
          </div>
          <div id="right-2">
            <h1>Sign Up</h1>
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder="Re-Password" />
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
