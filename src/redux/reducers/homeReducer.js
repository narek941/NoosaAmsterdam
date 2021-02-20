import { dataAPI } from '../../api';
const SET_CAROUSEL = 'SET_CAROUSEL';
const SET_BESTPRODUCTS = 'SET_BESTPRODUCTS';

let initialState = {
    carousel: [],
    bestProduct: [],
};
function homeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CAROUSEL:
            return {
                carousel: action.items,
            }
        case SET_BESTPRODUCTS:
            return {
                bestProduct: action.items,
            }
        default:
            return state;
    }
}

export const setCarousel = (items) => ({ type: SET_CAROUSEL, items })
export const setBestProduct = (items) => ({ type: SET_BESTPRODUCTS, items })

export const setBestProductItems = () => {
    console.log("reeeeeeeeed")
    return (dispatch) => {
        dataAPI.getProductsApi().then(data => {
            dispatch(setBestProduct(data));
        });
    }
}

export const setCarouselItems = () => {
    return (dispatch) => {
        dataAPI.getCarouselApi().then(data => {
            dispatch(setCarousel(data));

        });
    }
}

export default homeReducer;