import { combineReducers } from "redux";
import categories from "./categories";
import labels from "./labels";
import menus from "./menu";
import discounts from "./discounts";
import tables from "./tables";
import user from "./user";
import addOrder from "./addOrder";
import cart from "./cart";
import sideBar from "./sideBar";
import cartOrder from "./cartOrder";
// import productsByCategory from "./productsByCategory";

export default combineReducers({
  categories,
  labels,
  menus,
  discounts,
  tables,
  user,
  addOrder,
  cart,
  sideBar,
  cartOrder
});
