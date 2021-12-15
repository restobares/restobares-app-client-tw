import { ActionTypes } from "../constants";
import axios from "axios";

export function getDiscounts() {

  return async function(dispatch) {

    var json = await axios.get('http://localhost:3001/discounts');

    return dispatch({
      type: ActionTypes.GET_DISCOUNTS,
      payload: json.data
    })
  }
};