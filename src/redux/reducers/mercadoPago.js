import { ActionTypes } from '../constants';

const initialState = {
  url: ""
}

function mercadoPago(state = initialState, action) {

  if (action.type === ActionTypes.POST_ORDER_TO_MP) {

    return {
      url: action.payload.response.init_point
    }
  }
  return state;
}

export default mercadoPago;