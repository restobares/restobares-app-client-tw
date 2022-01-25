import { ActionTypes } from "../constants";

export function getProductsByName(payload) {

  return {
    type: ActionTypes.GET_PRODUCTS_BY_NAME,
    payload
  }
}