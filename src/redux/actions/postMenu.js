import { ActionTypes } from "../constants";
import axios from "axios";

export function postMenu(idResto, menuItem) {

  return async function(dispatch) {

    try {

      var json = await axios.post(`http://restobares-app-api.herokuapp.com/resto/${idResto}/admin/menu`, {
        name: menuItem.name,
        price: menuItem.price,
        detail: menuItem.detail,
        image: menuItem.image,
        CategoryId: menuItem.categoryId,
        id_label: menuItem.id_label,
        DiscountId: menuItem.discountId
      });

      return dispatch({
        type: ActionTypes.POST_MENU,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
}