import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatImg } from "../../redux/reducers/dataImgReducer";

function Counter() {
  const [cartData, setCartData] = useState(0);

  const { cart, count, imgURL } = useSelector((state) => ({
    ...state.addCartReducer,
    ...state.counterReducer,
    ...state.dataImgReducer,
  }));

  const dispatch = useDispatch();

  const incrFunc = () => {
    dispatch({
      type: "INCR",
    });
  };

  const decrFunc = () => {
    dispatch({
      type: "DECR",
    });
  };

  const addToCartFunc = () => {
    dispatch({
      type: "ADDCART",
      payload: cartData,
    });
  };

  useEffect(() => {
    dispatch(getCatImg());
  }, []);

  return (
    <>
      <h1>
        Votre panier : {cart} {count}
      </h1>
      <button onClick={incrFunc}>Plus one</button>
      <div>-------</div>
      <button onClick={decrFunc}>Minus one</button>
      <br />
      <br />
      <input
        value={cartData}
        onInput={(e) => setCartData(e.target.value)}
        type="number"
      />
      <br />
      <br />
      <button onClick={addToCartFunc}>Ajouter au panier</button>
      <br />
      <br />
      {imgURL && (
        <img style={{ width: "300px" }} src={imgURL} alt="baghee pic" />
      )}
    </>
  );
}

export default Counter;
