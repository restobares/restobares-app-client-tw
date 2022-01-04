import { ActionTypes } from "../constants";

const initialState = [];

function tables(state = initialState, action) {

  if (action.type === ActionTypes.GET_TABLES) {
    
    // let busyTables = action.payload?.filter((table) => table.state !== 'free');

    return action.payload;
  }
  if (action.type === ActionTypes.DELETE_PRODUCT_FROM_TABLE) {
    return state;
  }
  if (action.type === ActionTypes.TABLE_FILLED) {
    return state;
  }
  return state;
}

export default tables;