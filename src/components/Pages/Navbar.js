import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
