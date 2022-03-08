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
    // const [dataArr, setDataArr] = useState([
    //   { nom: "Minoushe" },
    //   { nom: "Freddy" },
    //   { nom: "Nahomy" },
    // ]);
  
    // // console.log(dataArr);
  
    // return (
    //   <div className="App">
    //     {dataArr.map((data, index) => {
    //       return <ul key={index}>Nom: {data.nom}</ul>;
    //     })}
    //   </div>
  );
};
  // const [dataImg, setDataImg] = useState();

  // useEffect(() => {
  //   fetch("https://api.thecatapi.com/v1/images/search")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDataImg(data[0].url);
  //     });
  // }, []);


  // return (
  //   <div className="App">
  //     {dataImg && (
  //       <img src={dataImg} alt="minouge" style={{ width: "500px" }} />
  //     )}
  //   </div>
  // );

  // const [timer, setTimer] = useState(1);

  // useEffect(() => {

  //   setInterval(() => {
  //     setTimer(timer => timer + 1);
  //   }, 1000);
    
  // }, []);

  // return (
  //   <div className="App">
  //     <h1>{timer}</h1>
  //   </div>
  // );
  
  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     setTimer((timer) => timer + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalID);
  //   };
  // }, []);

export default Revision;
