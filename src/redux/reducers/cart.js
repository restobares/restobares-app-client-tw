import { ActionTypes } from "../constants";

const initialState = {
  count: 0,
  preOrderCart: [],
  currentOrder: [],
  ordered: [],
  comments: ''
};


function cart(state = initialState, action) {

  var propsIgnored = {
    count: "count",
    billedCart: "billedCart",
    preOrderCart: "preOrderCart",
    ordersConfirmed: "ordersConfirmed",
    comments: "comments",
    currentOrder: "currentOrder",
    ordered: "ordered"
  }

  if(action.type === ActionTypes.GET_CART) {
    return state
  }

  if (action.type === ActionTypes.ADD_PRODUCT) {

    if (!state[action.payload.productId]) {
      state = {
        ...state,
        [action.payload.productId]: {
          productId: action.payload.productId,
          quantity: state.count + 1,
          productName: action.payload.productName,
          price: action.payload.price,
          image: action.payload.image,
          detail: action.payload.detail
        }
      }
      var newPreOrderCart = [];
      for (var i in state) {

        if (propsIgnored[i] || !state[i]) continue;

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
          ...state[action.payload.productId],
          quantity: state[action.payload.productId].quantity + 1
        }
      }
      let newPreOrderCart = [];
      for (let i in state) {

        if (propsIgnored[i] || !state[i]) continue;

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
        state = {
          ...state,
          [action.payload.productId]: null
        }
        let newPreOrderCart = [];
        for (let i in state) {

          if (propsIgnored[i] || !state[i]) continue;

          newPreOrderCart.push(state[i]);
        }
        return {
          ...state,
          preOrderCart: newPreOrderCart
        }
      }
      let newPreOrderCart = [];
      for (let i in state) {

        if (propsIgnored[i] || !state[i]) continue;

        newPreOrderCart.push(state[i]);
      }
      return {
        ...state,
        preOrderCart: newPreOrderCart
      };
    }    
  }

  if (action.type === ActionTypes.ADD_ORDER_TO_CART) {

    var newBilledCart = {
      ...state.billedCart
    }

    for (let i in state) {
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

    var newOrdersConfirmed = [];
    for (let i in newBilledCart) {
      newOrdersConfirmed.push(newBilledCart[i]);
    }

    return {
      count: 0,
      billedCart: newBilledCart,
      ordersConfirmed: newOrdersConfirmed,
      preOrderCart: []
    }
  }
  if (action.type === ActionTypes.ADD_COMMENT) {

    return {
      ...state,
      comments: action.payload
    }
  }

  if (action.type === ActionTypes.POST_ORDER) {
    return {
      count: 0,
      preOrderCart: [],
      currentOrder: [],
      ordered: []
    };
  }

  if (action.type === ActionTypes.GET_ORDERS) {

    let cartOrderedSorted = action.payload.ordered.sort((a, b) => a.productId - b.productId);
    return {
      ...state,
      currentOrder: action.payload.currentOrder.products,
      ordered: cartOrderedSorted,
      comments: action.payload.currentOrder.comments
    }
  }

  if (action.type === ActionTypes.PUT_TABLE_EATING) {
    return state;
  }
  return state;
}

export default cart;