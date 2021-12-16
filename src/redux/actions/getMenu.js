import { ActionTypes } from "../constants";
import axios from "axios";

export function getMenu() {

  return async function(dispatch) {

    try {
      var json = await axios.get(`http://localhost:3001/12317d8a-2a39-433f-bab5-306b9caafb32/table/1/menu`);

      return dispatch({
        type: ActionTypes.GET_MENU,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
} 