import { ActionTypes } from "../constants";
import axios from "axios";

export function putTableEating(idResto, idTable, token, idStaff) {

  return async function(dispatch) {
    
    try {
      var json = await axios.put(`http://restobares-app-api.herokuapp.com/resto/${idResto}/staff/tables`, 
      {
        idTable: `${idTable}`,
        state: "eating",
        idStaff: `${idStaff}`
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      return dispatch({
        type: ActionTypes.PUT_TABLE_EATING,
        payload: json.data
      });
    } catch(err) {
      console.log(err);
    }
  }
}