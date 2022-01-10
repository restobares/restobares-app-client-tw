import { ActionTypes } from "../constants";
const initialState = {
    msg:'',
};

function mailConfirmation(state = initialState, action) {
    if (action.type === ActionTypes.GET_MAIL_CONFIRMATION){
        return {
            ...state,
            msg:action.payload.msg,
        }
    }
    return state;
}

export default mailConfirmation;