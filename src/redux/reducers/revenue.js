import { ActionTypes } from "../constants";

const initialState = {
  custom: [],
  daily: [],
  monthly: [],
  weekly: []
}
function revenue(state = initialState, action) {

  if (action.type === ActionTypes.GET_REVENUE) {
    return {
      ...state,
      custom: action.payload
    };
  }
  if (action.type === ActionTypes.GET_DAILY_REVENUE) {
    return {
      ...state,
      daily: action.payload
    }
  }
  if (action.type === ActionTypes.GET_MONTHLY_REVENUE) {
    return {
      ...state,
      monthly: action.payload
    }
  }
  if (action.type === ActionTypes.GET_WEEKLY_REVENUE) {
    return {
      ...state,
      weekly: action.payload
    }
  }
  return state;
}

export default revenue;