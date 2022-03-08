import { useState, useRef, useEffect } from "react";
import "./index.css";
import Video from "./Video.mp4";

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  const ref = useRef();
  console.log(ref);

  useEffect(() => {
    setTimeout(() => {
      console.log(ref.current);
      ref.current.pause();
    }, 2000);
  }, []);

  return (
    <div className="App">
      <video ref={ref} width={400} height={400} controls muted autoPlay loop>
        <source src={Video} type="Video/mp4" />
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
