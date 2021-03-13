import store from "../store";
import {dataAPI} from "../../api";
const GET_BEST_PRODUCT_ITEMS ="GET_BEST_PRODUCT_ITEMS"
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const INITIAL_STATE = {
    bestProduct:[],
    isFetching:true,
};

///reducer
const BestProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BEST_PRODUCT_ITEMS:
            return {
                bestProduct: action.payload
            }
            case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

///reducer

//////actions creator
export const actionSetBestProductToRedux=(payload)=>({type: GET_BEST_PRODUCT_ITEMS,payload})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

//////actions creator

export const getBestProductThunk= async  dispatch => {
    store.dispatch(toggleIsFetching(true));
    await dataAPI.getAllProductsApi(6)
        .then(data => {
            console.log(data);
            store.dispatch(actionSetBestProductToRedux(data))
        });
    store.dispatch(toggleIsFetching(false));

}


export default BestProductsReducer;