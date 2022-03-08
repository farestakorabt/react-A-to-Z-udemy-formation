import React, { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [dataArr, setDataArr] = useState([
    { txt: "réparer le vélo", id: uuidv4() },
    { txt: "fabriquer un avion", id: uuidv4() },
    { txt: "regarder Shining", id: uuidv4() },
  ]);

  const [stateInput, setStateInput] = useState();

  const deleteElement = (id) => {
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });
    setDataArr(filteredState);
  };

  const linkedInput = (e) => {
    setStateInput(e);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newArr = [...dataArr];

    const newTodo = {};
    newTodo.txt = stateInput;
    newTodo.id = uuidv4();

    newArr.push(newTodo);
    setDataArr(newArr);
    setStateInput("");
  };

  return (
    <div>
      <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
        <form onSubmit={(e) => addTodo(e)} className="mb-3">
          <label htmlFor="todo" className="form-label mt-3">
            Chose à faire
          </label>
          <input
            value={stateInput}
            onInput={(e) => linkedInput(e.target.value)}
            type="text"
            className="form-control"
            id="todo"
            required
          />
          <button className="mt-2 btn btn-primary d-block">Envoyer</button>
        </form>
        <h2>Liste des chhoses à faire</h2>
        <ul className="list-groupe">
          {dataArr.map((item) => {
            return (
              <Item
                key={item.id}
                txt={item.txt}
                id={item.id}
                delFunc={deleteElement}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Form;
