import { ActionTypes } from "../constants";

export function getProductsByEditName(payload) {

  return {
    type: ActionTypes.GET_PRODUCTS_BY_EDITNAME,
    payload
  }
}