import React from "react";
import { useState } from "react";

const Revision = () => {
  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      {toggle ? (
        <h1 className="titre-item">Le state est true</h1>
      ) : (
        <h1 className="titre-item2">Le state est false</h1>
      )}
      <button onClick={changeState}>changer le state</button>
      <div className={toggle ? "box animated" : "box"}></div>
      <div
        className="box"
        style={{ backgroundColor: toggle ? "red" : "blue" }}
      ></div>
    </div>

    // short circuit operator ⇒ {toggle && <h1 className="titre-item">Le state est true</h1>}
  );
};

export default Revision;
