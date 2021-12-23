import { ActionTypes } from "../constants";
import axios from "axios";

export function getMenuAdmin(idResto) {

  return async function(dispatch) {

    try {
      var json = await axios.get(`https://restobares-app-api.herokuapp.com/resto/${idResto}/staff/menu`);

      return dispatch({
        type: ActionTypes.GET_MENU_ADMIN,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
} 