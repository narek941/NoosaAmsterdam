import {combineReducers } from 'redux';
import carouselReducer from '../reducers/carouselReducer';
import bestProductReducer from '../reducers/bestProductsReducer';

export default combineReducers({
    carouselItems:carouselReducer,
    bestProduct: bestProductReducer,
})