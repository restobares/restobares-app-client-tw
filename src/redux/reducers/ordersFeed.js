import { ActionTypes } from "../constants";

const initialState = [];

function ordersFeed(state = initialState, action) {

  if (action.type === ActionTypes.GET_ORDERS_FEED) {
    
    return action.payload;
  }
  return state;
}

export default ordersFeed;