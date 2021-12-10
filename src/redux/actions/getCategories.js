import { ActionTypes } from "../constants";
import axios from "axios";

export function getCategories() {

  return async function(dispatch) {

    var json = await axios.get('http://localhost:3001/get/categories');

    return dispatch({
      type: ActionTypes.GET_CATEGORIES,
      payload: json.data
    })
  }
};