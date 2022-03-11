import React, { useContext } from "react";
import "./btnToggle.css";
import { ThemeContext } from "../Context/ThemeContext";

function BtnToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={toggleTheme}
        className={theme ? "btn-toggle" : "btn-toggle dark-btn"}
      >
        {theme ? "LIGHT" : "DARK"}
      </button>
    </>
  );
}

export default BtnToggle;
