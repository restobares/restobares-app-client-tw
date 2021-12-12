import { ActionTypes } from "../constants";

export function addOrder(payload) {
  return {
    type: ActionTypes.ADD_ORDER,
    payload,
  };
}
