import { ActionTypes } from "../constants";
import axios from "axios";

export function getLabels() {

  return async function(dispatch) {

    var json = await axios.get('http://localhost:3001/get/labels');

    return dispatch({
      type: ActionTypes.GET_LABELS,
      payload: json.data
    })
  }
};