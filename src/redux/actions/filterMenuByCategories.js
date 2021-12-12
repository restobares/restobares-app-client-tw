import { ActionTypes } from "../constants";

export function filterMenuByCategory(payload) {

  return {
    type: ActionTypes.FILTER_MENU_BY_CATEGORY,
    payload
  }
}