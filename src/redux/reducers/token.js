import { ActionTypes } from "../constants";

const initialState = {
  admin: "",
  staff: "",
  error: ""
}

function token(state = initialState, action) {

  if (action.type === ActionTypes.LOG_IN) {

    let priviledge = action.payload.msg?.split(' ').pop().slice(0, -1);

    if (action.payload.error) {
      return {
        admin: "",
        staff: "",
        error: action.payload.error
      } 
    }

    if (priviledge === "admin") {

      return {
        ...state,
        admin: action.payload.token,
        error: ""
      }
    }
    if (priviledge === "staff") {
      return {
        ...state,
        staff: action.payload.token,
        error: ""
      }
    }
    return state;
  }

  // if (action.type === "GET_TOKEN") {
  //   return state;
  // }
  return state;
}

export default token;