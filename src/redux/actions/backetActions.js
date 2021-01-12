export const ADD_PRODUCT = 'ADD_PRODUCT';
export const MINUS_PRODUCT = 'MINUS_PRODUCT';


export function addProductInBasket(item) {
    return {
        type: ADD_PRODUCT,
        payload: item,
    };
}
export function minusProductInBasket(item) {
    return {
        type: MINUS_PRODUCT,
        payload: item,
    };
}