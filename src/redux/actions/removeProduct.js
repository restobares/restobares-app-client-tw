import { ActionTypes } from "../constants";

export function removeProduct(productId) {

  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId
    }
  }
}