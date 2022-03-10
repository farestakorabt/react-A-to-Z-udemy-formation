import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <>
      <h1>Services</h1>
      <nav>
        <Link to="/services/development">Développement</Link>
        <Link to="/services/cyberSecurity">Cyber sécurité</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Services;
