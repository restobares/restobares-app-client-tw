import { ActionTypes } from "../constants";

const initialState = {
  count: 0,
};


function cart(state = initialState, action) {

  if (action.type === ActionTypes.ADD_PRODUCT) {

    if (!state[action.payload.idProduct]) {
      state = {
        ...state,
        count: state.count + 1,
        [action.payload.idProduct]: {
          product_id: action.payload.idProduct,
          table_id: action.payload.idTable,
          quantity: state.count + 1
        }
      }
      return {
        ...state,
        count: 0
      }
    } else {
      return {
        ...state,
        [action.payload.idProduct]: {
          product_id: action.payload.idProduct,
          table_id: action.payload.idTable,
          quantity: state[action.payload.idProduct].quantity + 1
        }
      }
    }
    
  }
  if (action.type === ActionTypes.REMOVE_PRODUCT) {

    // esto actualiza la cantidad a la baja
    if (state[action.payload.idProduct]) {
      state = {
        ...state,
        [action.payload.idProduct]: {
          product_id: action.payload.idProduct,
          table_id: action.payload.idTable,
          quantity: state[action.payload.idProduct].quantity - 1
        }
      }
      // si la cantidad de ese producto llega a cero elimina el producto del carrito
      if (state[action.payload.idProduct].quantity === 0) {
        return {
          ...state,
          [action.payload.idProduct]: undefined
        }
      }
      return state;
    }    
  }
  return state;
}

export default cart;