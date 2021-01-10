import { ADD_PRODUCT, MINUS_PRODUCT } from '../actions/backetActions';

const initialState = {
    productInBasket: 0,
};
function backetReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                productInBasket: state.productInBasket + 1,
            }
        case MINUS_PRODUCT:
            return {
                productInBasket: state.productInBasket -1,
            }
        }
            return state;
    }


export default backetReducer;