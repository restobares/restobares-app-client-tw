import { ActionTypes } from "../constants";

export function addComment(payload) {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload
  }
}