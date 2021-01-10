export const ADD_PRODUCT = 'ADD_PRODUCT';
export const MINUS_PRODUCT = 'MINUS_PRODUCT';


export function addProductInBasket() {
    return {
        type: ADD_PRODUCT
    };
}
export function minusProductInBasket() {
    return {
        type: MINUS_PRODUCT
    };
}