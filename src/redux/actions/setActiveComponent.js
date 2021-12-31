import { ActionTypes } from "../constants";

export function setActiveComponent(payload) {

  return {
    type: ActionTypes.SET_ACTIVE_COMPONENT,
    payload   
  }
}