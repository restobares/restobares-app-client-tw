import { ActionTypes } from "../constants";
import axios from "axios";

export function putAvailableProduct(idResto, idProduct, token) {

  return async function(dispatch) {

    try {

      var json = await axios.put(`http://restobares-app-api.herokuapp.com/resto/${idResto}/staff/menu`, {
        product_Id: idProduct
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
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