import { ADD_PRODUCT, MINUS_PRODUCT } from '../actions/backetActions';

const initialState = {
    productInBasket: [],
};
function backetReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                productInBasket: [...state.productInBasket, action.payload],
            }
        case MINUS_PRODUCT:
            return {
               state,
            }
        }
            return state;
    }


export default backetReducer;