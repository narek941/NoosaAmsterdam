import {combineReducers } from 'redux';
import backetReducer from './bascetReducer';
import productReducer from './productReducer';

export default combineReducers({
    Backet: backetReducer,
    Product: productReducer,
})