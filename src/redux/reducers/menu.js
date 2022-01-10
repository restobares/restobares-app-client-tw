import { ActionTypes } from "../constants";

const initialState = {
  menu: [],
  backupMenu: [],
  categoriesSelected: '',
  menuAdmin: [],
  backupMenuAdmin: []
};

function menu(state = initialState, action) {

  const backupMenu = state.backupMenu;
  const backupMenuAdmin = state.backupMenuAdmin;
  /* const menuAdmin = state.menuAdmin; */

  if (action.type === ActionTypes.GET_MENU) {
    
    let availableMenu = action.payload.filter((product) => product.available);
    
    return {
      ...state,
      menu: availableMenu,
      backupMenu: availableMenu,
      categoriesSelected: '',
      menuAdmin: action.payload,
      backupMenuAdmin: action.payload
    };
  }

  if (action.type === ActionTypes.GET_MENU_ADMIN) {

    return {
      ...state,
      menuAdmin: action.payload
    };
  }

  if (action.type === ActionTypes.POST_MENU) {
    return state;
  }

  if (action.type === ActionTypes.PUT_MENU) {
    return state;
  }
  
  if(action.type === ActionTypes.FILTER_MENU_BY_CATEGORY) {

    if (action.payload === 'All') {

      return {
        ...state,
        menu: backupMenu,
        categoriesSelected: action.payload
      }
    }
  
    let categoryId = Number(action.payload)
    const filteredMenu = backupMenu.filter((product) => product.CategoryId  === categoryId);
      return {
        ...state,
        menu: filteredMenu,
        categoriesSelected: action.payload
      }
    }

  if (action.type === ActionTypes.FILTER_MENU_BY_LABELS) {
    // tener en cuanta que el payload es un array con las labels

    let filteredMenu;
    console.log(action.payload)
    if (action.payload === "All"){
      filteredMenu = backupMenu;
    } else {
      let labelId = Number(action.payload)
      if (state.categoriesSelected !== '') {
        filteredMenu = state.menu.filter((product) => product.Labels.includes(labelId));
      } else {
        filteredMenu = backupMenu.filter((product) => product.Labels.includes(labelId));
      }
      
    }


    return {
      ...state,
      menu: filteredMenu
    }
  }


  //SearchBar Client-Side
  if (action.type === ActionTypes.GET_PRODUCTS_BY_NAME) {

    // si la searchBar se vacia vuelve a mostrar todos los productos
    if (action.payload.length === 0) {

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

   //search en edit menu
  if (action.type === ActionTypes.GET_PRODUCTS_BY_EDITNAME) {

    // si la searchBar se vacia vuelve a mostrar todos los productos
    if (action.payload.length === 0) {

      return {
        ...state,
        menuAdmin: backupMenuAdmin
      }
    }

    const filteredMenu = backupMenuAdmin.filter((product) => product.name.toLowerCase().includes(action.payload.toLowerCase()));

    return {
      ...state,
      menuAdmin: filteredMenu
    }
  }


  if (action.type === ActionTypes.SORT_MENU_BY_PRICE) {

    if (action.payload === "default") {

      return {
        ...state,
        menu: backupMenu
      }
    }

    const sortedMenuByPrice =  [...state.menu].sort(function(a, b) {
        if (action.payload === "priceDescendant"){
          if(a.price < b.price){
            return 1;
          }
          if(b.price < a.price){
            return -1;
          }
          return 0;
        } 
        if (action.payload === "priceAscendant") {
          if(a.price > b.price){
              return 1;
          }
          if(b.price > a.price){
              return -1;
          }
          return 0;
        }
        return 0;
      });
    return {
      ...state,
      menu: sortedMenuByPrice
    }
  }
  if (action.type === ActionTypes.POST_MENU) {
    return state;
  }
  if (action.type === ActionTypes.PUT_MENU) {
    return state;
  }
  if(action.type === ActionTypes.PUT_AVAILABLE_PRODUCT) {
    return state;
  }
  return state;
}

export default menu;
