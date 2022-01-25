import { ActionTypes } from "../constants";
import axios from "axios";

export function getMenu(idResto, idTable) {

  return async function(dispatch) {

    try {
      var json = await axios.get(`https://restobares-app-api.herokuapp.com/resto/${idResto}/table/${idTable}/menu`);

      return dispatch({
        type: ActionTypes.GET_MENU,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
} 