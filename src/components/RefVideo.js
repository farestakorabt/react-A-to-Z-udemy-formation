import React from "react";
import { useEffect, useRef, useState } from "react";
import Pexels from "../assets/pexels.mp4"

export const RefVideo = () => {
  const [toggle, setToggle] = useState(true);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  const maRef = useRef([]);
  console.log(maRef); // => undefined

  const addToRef = (el) => {
    // console.log(el);
    if (el && !maRef.current.includes(el)) {
      maRef.current.push(el);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", actionResize);

    function actionResize() {
      console.log("resized !!!!!");
    }

    return () => {
      window.removeEventListener("resize", actionResize); // cleanup function
      // remove the function    ('the action', 'the name')
    };
  }, []);

  return (
    <div className="App">
      <video ref={addToRef} width={400} height={400} autoPlay controls muted>
        <source src={Pexels} />
      </video>

      <video ref={addToRef} width={400} height={400} autoPlay controls muted>
        <source src={Pexels} />
      </video>

      <video ref={addToRef} width={400} height={400} autoPlay controls muted>
        <source src={Pexels} />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
};
