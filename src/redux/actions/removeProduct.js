import { ActionTypes } from "../constants";

export function removeProduct(idProduct, idTable) {

  return {
    type: ActionTypes.REMOVE_ORDER,
    payload: {
      idProduct,
      idTable
    }
  }
}