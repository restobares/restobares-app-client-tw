import { ActionTypes } from "../constants";

const initialState = [];

function tables(state = initialState, action) {

  if (action.type === ActionTypes.GET_MENU) {
    return [...state, action.payload];
  }
  return state;
}

export default tables;