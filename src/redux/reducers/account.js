import { ActionTypes } from "../constants";

const initialState = {
  email: "",
  tables: "",
  title: "",
  logo: "",
  payment_mp: ""
}

function account(state = initialState, action) {

  if (action.type === ActionTypes.GET_ACCOUNT) {

    return {
      email: action.payload.email,
      tables: action.payload.tables,
      title: action.payload.title,
      logo: action.payload.logo,
      payment_mp: action.payload.payment_mp,
    }
  }
  return state;
}

export default account;