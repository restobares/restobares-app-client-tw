import { ActionTypes } from "../constants";
import axios from "axios";

export function deleteProductFromTable(idResto, idTable, productId, quantity, token) {

  return async function(dispatch) {

    try {

      var json = await axios.delete(`http://restobares-app-api.herokuapp.com/resto/${idResto}/staff/tables`, 
      {
        data: {
          tableId: `${idTable}`,
          productId,
          quantity
        },
        headers:{
          'Authorization': `Bearer ${token}`
        }
      });

      return dispatch({
        type: ActionTypes.DELETE_PRODUCT_FROM_TABLE,
        payload: json.data
      })
    } catch(err) {
      console.log(err);
    }
  }
}