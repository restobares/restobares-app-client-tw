import { ActionTypes } from "../constants";

const initialState = {activeComponent : null};

function activeComponent(state = initialState, action) {
  if (action.type === ActionTypes.SET_ACTIVE_COMPONENT) {      
      let activeComponent= {activeComponent : action.payload}
      return activeComponent
    }
    return state;
}

export default activeComponent;
