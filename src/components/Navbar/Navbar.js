import React from "react";
import "./navbar.css";

function Navibar() {
  return (
    <nav>
      <ul className="list">
        <li className="items">Accueil</li>
        <li className="items">Service</li>
        <li className="items">Contact</li>
      </ul>
      <button className="btn">BTN</button>
    </nav>
  );
}

export default Navibar;
