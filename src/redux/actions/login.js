import { ActionTypes } from "../constants";
import axios from "axios";

export function login(email, password) {

  

  return async function(dispatch) {

  //   if (!email && !password) {
  //   return dispatch({
  //     type: "INIT_LOG_IN"
  //   })
  // }

    try {
      var json = await axios.post("http://restobares-app-api.herokuapp.com/login", {
        email,
        password
      });

      return dispatch({
        type: ActionTypes.LOG_IN,
        payload: json.data
      });
    } catch(err) {
      console.log(err);     

      return dispatch({
        type: ActionTypes.LOG_IN,
        payload: {
          error: "Invalid credentials"
        }
      })
    }
  }
}