import { ActionTypes } from '../constants';

const initialState = {
  url: "",
  items: []
}

function mercadoPago(state = initialState, action) {

  if (action.type === ActionTypes.POST_ORDER_TO_MP) {

    return {
      url: action.payload.init_point,
      items: [...action.payload.items]
    }
  }
  return state;
}

export default mercadoPago;