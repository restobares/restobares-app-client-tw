import { ActionTypes } from "../constants";

const initialState = {
  admin: "",
  staff: "",
  idResto: "",
  error: "",
  logoutCode: "",
  idStaff: ""
}

function token(state = initialState, action) {

  if (action.type === ActionTypes.LOG_IN) {

    let priviledge = action.payload.msg?.split(' ').pop().slice(0, -1);
    // console.log(priviledge)
    if (action.payload.error) {
      return {
        admin: "",
        staff: "",
        idResto: "",
        error: action.payload.error,
        logoutCode: "",
        idStaff: ""
      } 
    }

    if (priviledge === "admin") {

      return {
        staff: "",
        admin: action.payload.token,
        idResto: action.payload.id,
        error: "",
        logoutCode: action.payload.logoutCode
      }
    }
    if (priviledge === "staff") {
      return {
        admin: "",
        staff: action.payload.token,
        idResto: action.payload.id,
        error: "",
        logoutCode: action.payload.logoutCode,
        idStaff: ""
      }
    }
    return state;
  }

  if (action.type === ActionTypes.LOG_OUT) {
    return {
      admin: "",
      staff: "",
      idResto: "",
      error: "",
      logoutCode: "",
      idStaff: ""
    }
  }

  return state;
}

export default token;