import { ActionTypes } from "../constants";

export function addProduct(idProduct, idTable) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      idProduct,
      idTable,
    }
  };
}