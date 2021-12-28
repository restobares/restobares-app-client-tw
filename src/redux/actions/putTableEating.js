import { ActionTypes } from "../constants";
import axios from "axios";

export function putTableEating(idResto, token) {

  return async function(dispatch) {
    
    try {
      var json = await axios.put(`http://restobares-app-api.herokuapp.com/resto/${idResto}/staff/tables`, 
      {
        idTable: 4,
        state: "eating",
        idStaff: "39672174"
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // console.log(json.data.comments);

      return dispatch({
        type: ActionTypes.PUT_TABLE_EATING,
        payload: json.data
      });
    } catch(err) {
      console.log(err);
    }
    
  }
}