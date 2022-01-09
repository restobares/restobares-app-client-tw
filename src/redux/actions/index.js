import { getCategories } from "./getCategories";
import { getLabels } from "./getLabels";
import { getUser } from "./getUser";
import { getMenu } from "./getMenu";
import { getCart } from "./getCart";
import { getTables } from "./getTables";
import { filterMenuByCategory } from "./filterMenuByCategories";
import { filterMenuByLabels } from "./filterMenuByLabels";
import { addOrder } from "./addOrder";
import { addProduct } from "./addProduct";
import { removeProduct } from "./removeProduct";
import { addOrderToCart } from "./addOrderToCart";
import { addComment } from "./addComment";
import { getProductsByName} from "./getProductsByName";
import { hideSideBar } from "./hideSideBar";
import { sortMenuByPrice } from "./sortMenuByPrice";
import { postOrder } from "./postOrder";
import { getOrders } from "./getOrders";
import { postOrderToMP } from "./postOrderMP";
import { putTableEating } from "./putTableEating";
import { getMenuAdmin } from "./getMenuAdmin";
import { login } from "./login";
import { getQrCode } from "./getQRCode";
import { deleteProduct } from "./deleteProduct";
import { postMenu } from "./postMenu";
import { getOrdersFeed } from "./getOrdersFeed";
import { deleteProductFromTable } from "./deleteProductFromTable";
import { setActiveComponent} from "./setActiveComponent";
import { changeTableFilled } from "./tableFilled";
import { inputValidator } from "./inputValidator";
import { inputValidatorRegister } from "./inputValidatorRegister";
import { postPayCash } from "./postPayCash";
import { putTableCashPayment } from "./putTableCashPayment";
import { putAvailableProduct } from "./putAvailableProduct";
import { putMenu } from "./putMenu";
import { postFeedback } from "./postFeedback";
import { register } from "./register";
import { getPasswordRecover } from "./getPasswordRecover";
import { putAccount } from "./putAccount";
import { logout } from "./logout";
import { sockets } from "./sockets";
import { getAccount } from "./getAccount";


export {  
  getCategories,
  getLabels,
  getUser,
  getMenu,
  getCart,
  getTables,
  filterMenuByCategory,
  filterMenuByLabels,
  addOrder,
  addProduct,
  removeProduct,
  addOrderToCart,
  addComment,
  getProductsByName,
  hideSideBar,
  sortMenuByPrice,
  postOrder,
  getOrders,
  postOrderToMP,
  putTableEating,
  getMenuAdmin,
  getQrCode,
  login,
  // this delete menu items
  deleteProduct,
  // this add menu items
  postMenu,
  getOrdersFeed,
  // this delete items from the table
  deleteProductFromTable,
  // set Active component for conditional rendering in admin side
  setActiveComponent,
  changeTableFilled,
  inputValidator,
  inputValidatorRegister,
  postPayCash,
  putTableCashPayment,
  putAvailableProduct,
  putMenu,
  postFeedback,
  register,
  getPasswordRecover,
  //change password admin/staff
  putAccount,
  logout,
  sockets,
  getAccount
};