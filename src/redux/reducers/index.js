import { combineReducers } from "redux";
import categories from "./categories";
import labels from "./labels";
import menu from "./menu";
import tables from "./tables";
import user from "./user";
import productCounter from "./productCounter";
import cart from "./cart";
// import productsByCategory from "./productsByCategory";




export default combineReducers({
  categories,
  labels,
  menu,
  tables,
  user,
  productCounter,
  cart
})