import { ActionTypes } from "../constants";
import axios from "axios";

export function changeTableFilled(idResto, idTable) {

  return async function(dispatch) {

    try {

      var json = await axios.post(`http://restobares-app-api.herokuapp.com/resto/${idResto}/table/${idTable}/filledTable`, {
        state : "filled"
      });

      return dispatch({
        type: ActionTypes.TABLE_FILLED,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
}