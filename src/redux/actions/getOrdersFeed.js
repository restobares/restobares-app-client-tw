import { ActionTypes } from "../constants";
import axios from "axios";

export function getOrdersFeed(idResto, token) {

  return async function(dispatch) {

    try {
      var json = await axios.get(`https://restobares-app-api.herokuapp.com/resto/${idResto}/staff/orders`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return dispatch({
        type: ActionTypes.GET_ORDERS_FEED,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
}