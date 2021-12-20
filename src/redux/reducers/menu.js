import { ActionTypes } from "../constants";

const initialState = {
  menu: [],
  backupMenu: []
};

function menu(state = initialState, action) {

  const backupMenu = state.backupMenu;
  console.log("backup menu ",backupMenu)

  if (action.type === ActionTypes.GET_MENU) {

    return {
      menu: action.payload,
      backupMenu: action.payload
    };
  }
  console.log("state", state)
  
  if(action.type === ActionTypes.FILTER_MENU_BY_CATEGORY) {
  
    console.log("action payload by category",action.payload)
    let labelNumber = Number(action.payload)
    const filteredMenu = backupMenu.filter((product) => product.CategoryId  === labelNumber);
      return {
        ...state,
        menu: filteredMenu
      }
    }
    // const filteredMenu = backupMenu.filter((product) => product.category === action.payload);
    // console.log("menu filtrado por categoria => ",filteredMenu)
    // return {
    //   ...state,
    //   menu: filteredMenu
    // }

  if (action.type === ActionTypes.FILTER_MENU_BY_LABELS) {
    // tener en cuanta que el payload es un array con las labels

    // const filteredMenu = backupMenu.filter((product) => action.payload.every((label) => product.labels.includes(label)));    
    let filteredMenu;
    console.log(action.payload)
    if (action.payload === "All"){
      filteredMenu = backupMenu;
      console.log("filtered menu => ",filteredMenu)
    } else {
      let labelNumber = Number(action.payload)
      filteredMenu = backupMenu.filter((product) => product.Labels.includes(labelNumber));
    }

    // const filteredMenu = backupMenu.filter((product) => action.payload.every((label) => product.labels.includes(label)));

    // const filteredMenu = backupMenu.filter((product) => product.labels.includes(action.payload));

    return {
      ...state,
      menu: filteredMenu
    }
  }

  if (action.type === ActionTypes.GET_PRODUCTS_BY_NAME) {

    // si la searchBar se vacia vuelve a mostrar todos los productos
    if (action.payload.lenght === 0) {

      return {
        ...state,
        menu: backupMenu
      }
    }

    const filteredMenu = backupMenu.filter((product) => product.name.toLowerCase().includes(action.payload.toLowerCase()))

    return {
      ...state,
      menu: filteredMenu
    }
  }
  return state;
}

export default menu;
