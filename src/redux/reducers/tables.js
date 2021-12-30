import { ActionTypes } from "../constants";

const initialState = [];

function tables(state = initialState, action) {

  if (action.type === ActionTypes.GET_TABLES) {
    
    let busyTables = action.payload?.filter((table) => table.state !== 'free');

    return busyTables;
  }
  if (action.type === ActionTypes.DELETE_PRODUCT_FROM_TABLE) {
    return state;
  }
  return state;
}

export default tables;