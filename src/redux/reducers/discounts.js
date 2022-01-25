import { ActionTypes } from "../constants";

const initialState = [];

function discounts(state = initialState, action) {

  if (action.type === ActionTypes.GET_DISCOUNTS) {
    return [...action.payload];
  }
  return state;
}

export default discounts;