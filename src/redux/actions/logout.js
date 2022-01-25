import { ActionTypes } from "../constants";
import axios from "axios";

export function logout(logoutCode) {  

  return async function(dispatch) {

    try {
      var json = await axios.post("http://restobares-app-api.herokuapp.com/logout", {
        logoutCode
      });

      return dispatch({
        type: ActionTypes.LOG_OUT,
        payload: json.data
      });
    } catch(err) {
      console.log(err);     
    }
  }
}