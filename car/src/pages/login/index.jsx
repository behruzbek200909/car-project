import React from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container">
      <form className="register">
        <h2 className="register-title">Login</h2>
        <input type="email" placeholder="Email" className="register-input" />
        <input
          type="password"
          placeholder="Password"
          className="register-input"
        />
        <NavLink to={"/register"} className="register-link">
          Register
        </NavLink>
        <button className="register-btn">login</button>
      </form>
    </div>
  );
};
