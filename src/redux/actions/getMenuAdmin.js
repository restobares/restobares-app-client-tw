import { ActionTypes } from "../constants";
import axios from "axios";

export function getMenuAdmin(idResto, token) {

  return async function(dispatch) {

    try {
      var json = await axios.get(`https://restobares-app-api.herokuapp.com/resto/${idResto}/staff/menu`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return dispatch({
        type: ActionTypes.GET_MENU_ADMIN,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
} 