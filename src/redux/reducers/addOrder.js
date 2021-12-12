import { ActionTypes } from "../constants";
import cart from "./cart.js";
const initialState = []
function addOrder(state = initialState, action) {

  if (action.type === ActionTypes.ADD_ORDER) {
    let quantity=0;
    if(cart.product_id === action.payload.product_id && cart.table_id=== action.payload.table_id){
      quantity=cart.quantity;
    }
    let product= {...action.payload, quantity}
    return [...state, product];
  }
  return state;
}

export default addOrder;