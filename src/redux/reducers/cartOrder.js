// import { ActionTypes } from "../constants";

// const initialState = {order: "default"};

// function cartOrder(state = initialState, action) {
//     //// NO FUNCIONA --> NO SE PUEDE ACCEDER A MENUS
//   if (action.type === ActionTypes.SET_ORDER) {
//     let order = action.payload;
//     console.log("order",order)
//     let orderedList;
//     console.log("state =>",state);

//     order !== "default" ? orderedList = state.menus.menu
//     .sort(function(a,b){
//       if (action.payload === "mayor"){
//           if(a.price < b.price){
//               return 1;
//           }
//           if(b.price < a.price){
//               return -1;
//           }
//           return 0
//       }
//       else{
//           if(a.price < b.price){
//               return 1;
//           }
//           if(b.price < a.price){
//               return -1;
//           }
//           return 0
//       }
//   })

//   : orderedList = state.menus.backupMenu




//     return {order, menu: orderedList }
//   }
//   return state;
// }
// export default cartOrder;