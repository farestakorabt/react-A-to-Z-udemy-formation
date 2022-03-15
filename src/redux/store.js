import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";
import addCartReducer from "./reducers/addCartReducer";
import dataImgReducer from "./reducers/dataImgReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counterReducer,
  addCartReducer,
  dataImgReducer,
});

// const customMiddleWare = (store) => (next) => (action) => {
//   const actionModif = {
//     type: "ADDCART",
//     payload: 55,
//   };
//   next(actionModif);
// };

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
