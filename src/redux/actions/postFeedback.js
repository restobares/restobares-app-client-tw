import { ActionTypes } from "../constants";
import axios from "axios";

export function postFeedback(idResto, idTable, comment, rating) {
  
  return async function(dispatch) {

    try {

      var json = await axios.post(`http://restobares-app-api.herokuapp.com/resto/${idResto}/table/${idTable}/feedback`, {
        comment,
        rating
      });

      return dispatch({
        type: ActionTypes.POST_FEEDBACK,
        payload: json.data
      });
    } catch(err) {
      console.log(err);
    }
  }
}