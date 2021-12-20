import { ActionTypes } from "../constants";

export function setOrder(payload) {

  return {
    type: ActionTypes.SET_ORDER,
    payload
  }
}