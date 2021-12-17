import { ActionTypes } from "../constants";

const initialState = {
  count: 0,
  billedCart:{},
  preOrderCart: [],
  ordersConfirmed: [],
  comment: ''
};


function cart(state = initialState, action) {

  var propsIgnored = {
    count: "count",
    billedCart: "billedCart",
    preOrderCart: "preOrderCart",
    ordersConfirmed: "ordersConfirmed",
    comment: "comment"
  }

  if(action.type === ActionTypes.GET_CART) {
    return {
      ...state
    }
  }

  if (action.type === ActionTypes.ADD_PRODUCT) {

    if (!state[action.payload.productId] || Object.keys(state[action.payload.productId]).length === 0) {
      state = {
        ...state,
        [action.payload.productId]: {
          productId: action.payload.productId,
          quantity: state.count + 1
        }
      }
      var newPreOrderCart = [];
      for (var i in state) {

        if (propsIgnored[i]) continue;

        newPreOrderCart.push(state[i]);
      }

      return {
        ...state,
        preOrderCart: newPreOrderCart
      }
    } else {
      state = {
        ...state,
        [action.payload.productId]: {
          productId: action.payload.productId,
          table_id: action.payload.idTable,
          quantity: state[action.payload.productId].quantity + 1
        }
      }
      var newPreOrderCart = [];
      for (var i in state) {

        if (propsIgnored[i]) continue;

        newPreOrderCart.push(state[i]);
      }

      return {
        ...state,
        preOrderCart: newPreOrderCart
      }
    }
    
  }
  if (action.type === ActionTypes.REMOVE_PRODUCT) {

    // esto actualiza la cantidad a la baja
    if (state[action.payload.productId]) {
      state = {
        ...state,
        [action.payload.productId]: {
          ...state[action.payload.productId],
          quantity: state[action.payload.productId].quantity - 1
        }
      }
      // si la cantidad de ese producto llega a cero elimina el producto del carrito
      if (state[action.payload.productId].quantity === 0) {
        return {
          ...state,
          [action.payload.productId]: {}
        }
      }
      var newPreOrderCart = [];
      for (var i in state) {

        if (propsIgnored[i]) continue;

        newPreOrderCart.push(state[i]);
      }
      return {
        ...state,
        preOrderCart: newPreOrderCart
      };
    }    
  }

  if (action.type === ActionTypes.ADD_ORDER_TO_CART) {

    // return {
    //   count: 0,
    //   billedCart: {
    //     ...state.billedCart,
    //     ...state,
    //   }
    // }
    var newBilledCart = {
      ...state.billedCart
    }

    for (var i in state) {
      if(propsIgnored[i]) continue;
      if (state.billedCart.hasOwnProperty(i)) {
        
        newBilledCart[i] = {
          ...newBilledCart[i],
          quantity: state.billedCart[i].quantity + state[i].quantity
        }

      } else {

        newBilledCart[i] = state[i];
      }
    }
    return {
      
      count: 0,
      billedCart: newBilledCart
    }
  }
  return state;
}

export default cart;