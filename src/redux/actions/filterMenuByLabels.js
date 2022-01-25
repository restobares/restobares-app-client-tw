import { ActionTypes } from "../constants";

export function filterMenuByLabels(payload) {

  return {
    type: ActionTypes.FILTER_MENU_BY_LABELS,
    payload
  }
}