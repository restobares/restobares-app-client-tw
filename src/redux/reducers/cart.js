import { ActionTypes } from "../constants";

const initialState = {
  count: 0,
  billedCart:{},
  billedCartArr: [],
  ordersConfirmed: [],
  comments: ""
};


function cart(state = initialState, action) {

  if(action.type === ActionTypes.GET_CART) {
    return {
      ...state
    }
  }

  if (action.type === ActionTypes.ADD_PRODUCT) {

    if (!state[action.payload.idProduct] || Object.keys(state[action.payload.idProduct]).length === 0) {
      state = {
        ...state,
        count: state.count + 1,
        [action.payload.idProduct]: {
          product_id: action.payload.idProduct,
          product_name: action.payload.product_name,
          price: action.payload.price,
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
          // product_id: action.payload.idProduct,
          // table_id: action.payload.idTable,
          ...state[action.payload.idProduct],
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
          // product_id: action.payload.idProduct,
          // table_id: action.payload.idTable,
          // quantity: state[action.payload.idProduct].quantity - 1
          ...state[action.payload.idProduct],
          quantity: state[action.payload.idProduct].quantity - 1
        }
      }
      // si la cantidad de ese producto llega a cero elimina el producto del carrito
      if (state[action.payload.idProduct].quantity === 0) {
        return {
          ...state,
          [action.payload.idProduct]: {}
        }
      }
      return state;
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

    var newBilledCartArr = []

    for (var i in state) {
      if(i==="count" || i === "billedCart" || i === "billedCartArr" || i === "ordersConfirmed" || i === "comments") continue;
      newBilledCart[i] = {}
      if (state.billedCart.hasOwnProperty(i)) {
        
        newBilledCart[i] = {}

        newBilledCart[i].quantity = state.billedCart[i].quantity + state[i].quantity;
        newBilledCart[i].product_id = state.billedCart[i].product_id;
        newBilledCart[i].product_name = state[i].product_name;
        newBilledCart[i].price = state[i].price;

      } else {

        newBilledCart[i].quantity = state[i].quantity;
        newBilledCart[i].product_id = state[i].product_id;
        newBilledCart[i].product_name = state[i].product_name;
        newBilledCart[i].price = state[i].price;
      }
    }
    
    for (var i in newBilledCart) {

      newBilledCartArr.push(newBilledCart[i]);
    }



    return {
      
      count: 0,
      billedCart: newBilledCart,
      billedCartArr: newBilledCartArr 
    }
  }
  return state;
}

export default cart;