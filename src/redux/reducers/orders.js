import { ActionTypes } from "../constants";

const initialState = {};

function orders(state = initialState, action) {

  if (action.type === ActionTypes.GET_ORDERS) {
    return action.payload;
  }
  return state;
}
export default orders;