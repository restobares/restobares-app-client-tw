import { ActionTypes } from "../constants";
import {cart} from "./cart.js";
const initialState = []
function addOrder(state = initialState, action) {

  if (action.type === ActionTypes.ADD_ORDER) {
    return [...state, action.payload];
  }
  return state;
}

export default addOrder;