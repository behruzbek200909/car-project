import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-inner-blood">
            <p className="chine">Bosh sahifa </p>
            <p className="made">modellari</p>
          </div>
          <NavLink to={"/login"}>
            <button className="header-botton">
              <FaUserAstronaut />
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
