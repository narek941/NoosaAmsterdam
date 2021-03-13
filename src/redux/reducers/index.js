import {combineReducers } from 'redux';
import carouselReducer from '../reducers/carouselReducer';
import bestProductReducer from '../reducers/bestProductsReducer';
import ProductsByIdReducer from "./productsByIdReducer";

export default combineReducers({
    carouselItems:carouselReducer,
    bestProduct: bestProductReducer,
    productsById:ProductsByIdReducer,
})