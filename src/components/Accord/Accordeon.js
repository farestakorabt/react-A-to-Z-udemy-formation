import React, { useState, useRef, useEffect } from "react";
import "./accordeon.css";
import Chevron from "./chevron-down.svg";

function Accordeon() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const refHeight = useRef();

  return (
    <div className="accordeon">
      <div onClick={toggleState} className="accordeon-visible">
        <h2>Lorem ipsum dolor sit zrtghbfgrth</h2>
        <img src={Chevron} alt="chevron down" width={40} />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "accordeon-toggle animated" : "accordeon-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore hic
          voluptatem libero quasi non quisquam molestias magnam repudiandae eum
          magni aut vel vero beatae dolor veniam, voluptatibus ipsam fugiat.
        </p>
      </div>
    </div>
  );
}

export default Accordeon;
