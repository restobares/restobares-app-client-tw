import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'

const store = configureStore({ reducer: rootReducer })
// store.dispatch({ type: "GET_USER" })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on


export default store;