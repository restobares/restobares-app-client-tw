import { ActionTypes } from "../constants";
import axios from "axios";

export function getOrders(idResto, idTable) {

  return async function(dispatch) {
    
    var json = await axios.get(`http://restobares-app-api.herokuapp.com/resto/${idResto}/table/${idTable}/order`);
    // console.log(json.data.comments);

    return dispatch({
      type: ActionTypes.GET_ORDERS,
      payload: json.data
    })
  }
}