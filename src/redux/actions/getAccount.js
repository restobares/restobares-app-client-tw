import { ActionTypes } from "../constants";
import axios from "axios";

//usar este controller para todas las demas*

export function getAccount(idResto, token) {

  return async function(dispatch) {

    try {

      var json = await axios.get(`http://restobares-app-api.herokuapp.com/resto/${idResto}/admin/account`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return dispatch({
        type: ActionTypes.GET_ACCOUNT,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
}