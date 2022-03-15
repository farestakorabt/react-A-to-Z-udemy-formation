const INITIAL_STATE = {
  count: 50,
};

function CounterReducer(state = INITIAL_STATE, action) {
  // console.log(state);
  switch (action.type) {
    case "INCR": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "DECR": {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    default:
      break;
  }

  return state;
}

export default CounterReducer;
