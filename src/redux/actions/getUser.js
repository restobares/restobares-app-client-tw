import { ActionTypes } from "../constants";
import axios from "axios";

export function getUser() {

  return async function(dispatch) {

    var json = await axios.get('http://localhost:3001/resto/12317d8a-2a39-433f-bab5-306b9caafb32/user');


      return dispatch({
        type: ActionTypes.GET_USER,
        payload: json.data
      });
  }
}

