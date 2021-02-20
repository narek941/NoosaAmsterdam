import {combineReducers } from 'redux';
import backetReducer from './bascetReducer';
import productReducer from './productReducer';
import homeReducer from './homeReducer';


export default combineReducers({
    Backet: backetReducer,
    Product: productReducer,
    Home: homeReducer,
})