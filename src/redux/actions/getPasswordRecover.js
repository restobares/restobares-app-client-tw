import { ActionTypes } from "../constants";
import axios from "axios";

export function getPasswordRecover(email) {

  return async function(dispatch) {

    try {
      var json = await axios.post(`https://restobares-app-api.herokuapp.com/recover`, {
        email
      });
      
      return dispatch({
        type: ActionTypes.GET_PASSWORD_RECOVER,
        payload: json.data
      })
    } catch(err) {
      console.log(err);      
    }
  }
}