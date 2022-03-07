import React, { useState } from "react";
import "./item.css";

function Item() {
  const [dataArr, setDataArr] = useState([
    { nom: "Minoushe" },
    { nom: "Freddy" },
    { nom: "Nahomy" },
  ]);

  // console.log(dataArr);

  return (
    <div className="App">
      {dataArr.map((data, index) => {
        return <ul key={index}>Nom: {data.nom}</ul>;
      })}
    </div>
  );
}
export default Item;
