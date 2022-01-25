import { ActionTypes } from "../constants";
import axios from "axios";

export function getMailConfirmation(token) {

  return async function(dispatch) {

    try {
        console.log("TOKEN",token)
      var json = await axios.get(`https://restobares-app-api.herokuapp.com/confirmation/${token}`);

      return dispatch({
        type: ActionTypes.GET_MAIL_CONFIRMATION,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
} 