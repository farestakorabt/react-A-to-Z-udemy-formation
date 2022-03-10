import React from "react";
import { useCallback, useMemo, useState } from "react";
import Content from "./Content";

const UseMemoUseCallback = () => {
  const [toggle, setToggle] = useState([1, 21, 5, 41]);

  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);
    setToggle(newArr); // never mutate state directly
  };

  const tableau = useMemo(() => {
    return [2, 1, 2, 5, 4, 51];
  }, []); // arrays & objects are valeur de référence

  const foo = useCallback(() => {
    // use for function
    console.log("maj");
  }, []);

  return (
    <div>
      <Content num={tableau} foo={foo}></Content>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
};

export default UseMemoUseCallback;
