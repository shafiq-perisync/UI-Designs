import {SET_DARK_THEME} from './actions';

const initialState =  'light'

export const themeReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_DARK_THEME:
      return action.payload;
    default:
      return state;
  };
};