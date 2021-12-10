import { combineReducers } from "redux";
import categories from "./categories";
import labels from "./labels";
import menu from "./menu";
import tables from "./tables";



export default combineReducers({
  categories,
  labels,
  menu,
  labels,
  tables
})