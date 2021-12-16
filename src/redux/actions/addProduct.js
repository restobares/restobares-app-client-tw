import { ActionTypes } from "../constants";

export function addProduct(idProduct, idTable, product_name, price) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      idProduct,
      idTable,
      product_name,
      price
    }
  };
}