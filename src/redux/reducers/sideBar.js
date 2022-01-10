import { ActionTypes } from "../constants";

const initialState = {sideBar : false};

function hideSideBar(state = initialState, action) {
  if (action.type === ActionTypes.HIDE_SIDEBAR) {      
      let sideBar = {sideBar : action.payload}
      return  sideBar
    }
    return state;
}

export default hideSideBar;