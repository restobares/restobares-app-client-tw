import { ActionTypes } from "../constants";

export function addProduct(productId, productName, image, price, detail) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      productId,
      productName,
      image,
      price,
      detail
    }
  };
}