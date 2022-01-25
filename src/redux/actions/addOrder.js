import { ActionTypes } from "../constants";

export function addOrder(platillo,idTable) {
  return {
    type: ActionTypes.ADD_ORDER,
    payload:{
      ...platillo, idTable
    }
  };
}

