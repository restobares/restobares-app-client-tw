import { ActionTypes } from "../constants";
import axios from "axios";

export function callStaff(idResto, idTable) {

  return async function(dispatch) {
    
    try {
      var json = await axios.put(`http://restobares-app-api.herokuapp.com/resto/${idResto}/tables/${idTable}/order`);
      // console.log(json.data.comments);

      return dispatch({
        type: ActionTypes.PUT_CALL_STAFF,
        payload: json.data
      });
    } catch(err) {
      console.log(err);
    }
  }
}