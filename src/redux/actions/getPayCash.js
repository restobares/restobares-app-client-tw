import { ActionTypes } from "../constants";
import axios from "axios";

export function getPayCash(idResto, idTable) {

  return async function(dispatch) {

    try {

      var json = await axios.get(`http://restobares-app-api.herokuapp.com/resto/${idResto}/table/${idTable}/payment`);

      return dispatch({
        type: ActionTypes.GET_PAY_CASH,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
}