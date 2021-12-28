import { ActionTypes } from "../constants";
import axios from "axios";

export function postOrderToMP(idResto, idTable, tip) {

  return async function(dispatch) {

    try {

      var json = await axios.post(`http://restobares-app-api.herokuapp.com/resto/${idResto}/table/${idTable}/payment`, {
        state: "pay_online",
        tip
      });

      return dispatch({
        type: ActionTypes.POST_ORDER_TO_MP,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
}