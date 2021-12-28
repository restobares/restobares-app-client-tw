import { ActionTypes } from "../constants";
import axios from "axios";

export function putMenu(idResto, idProduct, menuItem) {

  return async function(dispatch) {

    try {

      var json = await axios.put(`http://restobares-app-api.herokuapp.com/resto/${idResto}/admin/menu/${idProduct}`, {
        name: menuItem.name,
        price: menuItem.price,
        detail: menuItem.detail,
        image: menuItem.image,
        CategoryId: menuItem.categoryId,
        id_label: menuItem.id_label,
        DiscountId: menuItem.discountId
      });

      return dispatch({
        type: ActionTypes.PUT_MENU,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
}