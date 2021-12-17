import { ActionTypes } from "../constants";

export function removeProduct(idProduct) {

  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      idProduct
    }
  }
}