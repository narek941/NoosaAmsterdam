import {combineReducers } from 'redux';
import carouselReducer from '../reducers/carouselReducer';

export default combineReducers({
    carouselItems:carouselReducer,
})