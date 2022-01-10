import { ActionTypes } from "../constants";
import axios from "axios";

export function callStaff(idResto, idTable) {

  return async function(dispatch) {
    
    try {
      var json = await axios.put(`http://restobares-app-api.herokuapp.com/resto/${idResto}/table/${idTable}/order`);

      return dispatch({
        type: ActionTypes.PUT_CALL_STAFF,
        payload: idTable
      });
    } catch(err) {
      console.log(err);
    }
  }
}