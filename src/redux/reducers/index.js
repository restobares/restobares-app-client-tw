import { combineReducers } from "redux";
import categories from "./categories";
import labels from "./labels";
import menu from "./menu";
import tables from "./tables";
import user from "./user";
<<<<<<< HEAD
import addOrder from "./addOrder";
=======
import productCounter from "./productCounter";
import cart from "./cart";
>>>>>>> 63462ebc7ab8ebdbe438c982b0772792ecbabdb7
// import productsByCategory from "./productsByCategory";

export default combineReducers({
  categories,
  labels,
  menu,
  tables,
  user,
<<<<<<< HEAD
  addOrder,
});
=======
  productCounter,
  cart
})
>>>>>>> 63462ebc7ab8ebdbe438c982b0772792ecbabdb7
