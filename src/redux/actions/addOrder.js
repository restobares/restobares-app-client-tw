import { ActionTypes } from "../constants";

<<<<<<< HEAD
export function addOrder(payload) {
  return {
    type: ActionTypes.ADD_ORDER,
    payload,
  };
}
=======
export function addOrder(idProduct, idTable) {

  return {
    type: ActionTypes.ADD_ORDER,
    payload: {
      idProduct,
      idTable
    }
  }
}
>>>>>>> 63462ebc7ab8ebdbe438c982b0772792ecbabdb7
