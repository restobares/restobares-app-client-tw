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
      return dispatch({
        type: ActionTypes.POST_REGISTER,
        payload: {
					error: "There was a problem sending the Email. Either it's incorrect, or it already exists."
        }
      });
    }
  }
}
