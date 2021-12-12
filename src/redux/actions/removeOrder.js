import { ActionTypes } from "../constants";

export function removeOrder(idProduct, idTable) {

  return {
    type: ActionTypes.REMOVE_ORDER,
    payload: {
      idProduct,
      idTable
    }
  }
}