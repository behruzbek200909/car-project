import React from "react";
import "./register.css";
import { NavLink } from "react-router-dom";

export const Register = () => {
  return (
    <div className="container">
      <form className="register">
        <h2 className="register-title">Register</h2>
        <input type="text" placeholder="UserName" className="register-input" />
        <input type="email" placeholder="Email" className="register-input" />
        <input
          type="password"
          placeholder="Password"
          className="register-input"
        />
        <NavLink to={"/login"} className="register-link">
          Login
        </NavLink>
        <button className="register-btn">register</button>
      </form>
    </div>
  );
};
