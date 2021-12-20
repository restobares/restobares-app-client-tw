import { ActionTypes } from "../constants";

export function hideSideBar(payload) {

  return {
    type: ActionTypes.HIDE_SIDEBAR,
    payload   
  }
}