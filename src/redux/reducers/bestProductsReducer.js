import store from "../store";
import {dataAPI} from "../../api";
const GET_BEST_PRODUCT_ITEMS ="GET_BEST_PRODUCT_ITEMS"

const INITIAL_STATE = {
    bestProduct:[]
};

///reducer
const BestProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BEST_PRODUCT_ITEMS:
            return {
                bestProduct: action.payload
            }
        default:
            return state
    }
}

///reducer

//////actions creator
export const actionSetBestProductToRedux=(payload)=>({type: GET_BEST_PRODUCT_ITEMS,payload})


//////actions creator

export const getBestProductThunk = dispatch => {
    console.log('loading')
    dataAPI.getAllProductsApi(6)
        .then(data => {
            console.log(data);
            store.dispatch(actionSetBestProductToRedux(data))
        });
    console.log('loading is fin' )
}


export default BestProductsReducer;