import { ActionTypes } from "../constants";

export function sortMenuByPrice(payload) {

  return {
    type: ActionTypes.SORT_MENU_BY_PRICE,
    payload
  }
}