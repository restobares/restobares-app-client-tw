import { ActionTypes } from "../constants";
import axios from "axios";

export function getUser(idResto) {

  return async function(dispatch) {

    try {
      var json = await axios.get(`http://localhost:3001/resto/${idResto}/user`);

      return dispatch({
        type: ActionTypes.GET_USER,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
}

