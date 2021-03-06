import React, { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="list">
          <li className="items">Accueil</li>
          <li className="items">Ecrire</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <button className="btn" onClick={toggleNav}>
        BTN
      </button>
    </nav>
  );
}

