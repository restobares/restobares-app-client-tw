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
import mercadoPago from "./mercadoPago";
import token from "./token";
import ordersFeed from "./ordersFeed";
import activeComponent from "./activeComponent";
import qrCode from "./qrCode";
import account from "./account";
import feedback from "./feedback";
import revenue from "./revenue";
import mailConfirmation from "./mailConfirmation";
import orders from "./orders";
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
  cartOrder,
  mercadoPago,
  token,
  ordersFeed,
  activeComponent,
  qrCode,
  account,
  feedback,
  revenue,
  mailConfirmation,
  orders
});
