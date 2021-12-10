import { combineReducers } from "redux";
import categories from "./categories";
import labels from "./labels";
import menu from "./menu";
import tables from "./tables";
import productCounter from "./productCounter";



export default combineReducers({
  categories,
  labels,
  menu,
  labels,
  tables,
  productCounter
})