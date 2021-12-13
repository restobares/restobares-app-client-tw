import { ActionTypes } from "../constants";
import cart from "../reducers/cart";
import menu from "../reducers/menu";

export function addOrder(idProduct, idTable) {

  return {
    type: ActionTypes.ADD_ORDER,
    payload: {
      idProduct,
      idTable
    }
  }
}

