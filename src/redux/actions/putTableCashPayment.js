import { ActionTypes } from "../constants";
import axios from "axios";

export function putTableCashPayment(idResto, idTable, token, idStaff) {

  return async function(dispatch) {
    
    try {
      var json = await axios.put(`http://restobares-app-api.herokuapp.com/resto/${idResto}/staff/tables`, 
      {
        idTable: `${idTable}`,
        state: "pay_cash",
        idStaff: `${idStaff}`
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // console.log(json.data.comments);

      return dispatch({
        type: ActionTypes.PUT_TABLE_CASH_PAYMENT,
        payload: json.data
      });
    } catch(err) {
      console.log(err);
    }
    
  }
}