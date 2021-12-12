import { ActionTypes } from "../constants";

const initialState = {
  menu: [],
  backupMenu: []
};

function menu(state = initialState, action) {

  const backupMenu = state.backupMenu;

  if (action.type === ActionTypes.GET_MENU) {
    return {
      menu: action.payload,
      backupMenu: action.payload
    };
  }
  

  if(action.type === ActionTypes.FILTER_MENU_BY_CATEGORY) {

    const filteredMenu = backupMenu.filter((product) => product.category === action.payload);

    return {
      ...state,
      menu: filteredMenu
    }
  }

  if (action.type === ActionTypes.FILTER_MENU_BY_LABELS) {

    // tener en cuanta que el payload es un array con las labels

    // const filteredMenu = backupMenu.filter((product) => action.payload.every((label) => product.labels.includes(label)));

    const filteredMenu = backupMenu.filter((product) => product.labels.include(action.payload));

    return {
      ...state,
      menu: filteredMenu
    }
  }
  return state;
}

export default menu;
