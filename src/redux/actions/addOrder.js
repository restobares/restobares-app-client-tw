import { ActionTypes } from "../constants";

export function addOrder(idProduct, idTable) {

  return {
    type: ActionTypes.ADD_ORDER,
    payload: {
      idProduct,
      idTable
    }
  }
}