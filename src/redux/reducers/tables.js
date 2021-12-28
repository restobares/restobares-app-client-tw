import { ActionTypes } from "../constants";

const initialState = [];

function tables(state = initialState, action) {

  if (action.type === ActionTypes.GET_TABLES) {
    
    let busyTables = action.payload?.filter((table) => table.state !== 'free');

    return busyTables;
  }
  return state;
}

export default tables;