import { ActionTypes } from "../constants";
import axios from "axios";

export function getUser(idResto) {

  return async function(dispatch) {

    // this is how it should be, we are using /dev/users route temporarily
    // var json = await axios.get(`https://restobares-app-api.herokuapp.com/resto/${idResto}/user`);

    // this route is temporary
    var json = await axios.get('http://restobares-app-api.herokuapp.com/dev/users')


      return dispatch({
        type: ActionTypes.GET_USER,
        payload: json.data
      });
  }
}

