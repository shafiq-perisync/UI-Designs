import { applyMiddleware} from 'react'
import { combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk'
import {themeReducer} from './reducers'

const reducer = {
     theme: themeReducer
};

// console.log(reducer);
const rootReducer = combineReducers(reducer);

// export const Store = createStore(rootReducer, applyMiddleware(thunk));

export const store = createStore(rootReducer);
// console.log(rootReducer)