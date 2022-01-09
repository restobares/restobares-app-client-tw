import { ActionTypes } from "../constants";

const initialState = []
function feedback(state = initialState, action) {

  if (action.type === ActionTypes.GET_FEEDBACK) {
    return [...action.payload];
  }
  return state;
}

export default feedback;