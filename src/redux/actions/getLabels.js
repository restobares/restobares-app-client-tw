import { ActionTypes } from "../constants";
import axios from "axios";

export function getLabels() {

  return async function(dispatch) {

    var json = await axios.get('http://restobares-app-api.herokuapp.com/labels');

    return dispatch({
      type: ActionTypes.GET_LABELS,
      payload: json.data
    })
  }
};