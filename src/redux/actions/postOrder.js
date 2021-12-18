import { ActionTypes } from "../constants";
import axios from "axios";

export function postOrder(payload, idResto, idTable) {
  
  return async function(dispatch) {

    try {

      var json = await axios.post(`http://restobares-app-api.herokuapp.com/resto/${idResto}/table/${idTable}/order`, payload);

      return dispatch({
        type: ActionTypes.POST_ORDER,
        payload: json.data
      });
    } catch(err) {
      console.log(err);
    }
  }
}