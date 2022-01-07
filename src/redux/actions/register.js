import { ActionTypes } from "../constants";
import axios from "axios";

export function register(clientInfo) {
  
  return async function(dispatch) {

    try {

      var json = await axios.post(`http://restobares-app-api.herokuapp.com/register`, clientInfo);

      return dispatch({
        type: ActionTypes.POST_REGISTER,
        payload: json.data
      });
    } catch(err) {
      console.log(err);
    }
  }
}