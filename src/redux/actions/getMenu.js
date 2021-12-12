import { ActionTypes } from "../constants";
import axios from "axios";

export function getMenu() {

  return async function(dispatch) {

    try {
      var json = await axios.get(`restobar.com/:idResto/mesa/:idMesa/menu`);

      return dispatch({
        type: ActionTypes.GET_MENU,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
} 