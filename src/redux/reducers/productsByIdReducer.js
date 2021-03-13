import store from "../store";
import {dataAPI} from "../../api";
const GET_PRODUCT_BY_ID ="GET_PRODUCT_BY_ID"
const BY_ID_IS_FETCHING = 'BY_ID_IS_FETCHING';

const INITIAL_STATE = {
    productsById:[],
    isFetching:true,
};

///reducer
const ProductsByIdReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            return {
                productsById: action.payload
            }
        case BY_ID_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

///reducer

//////actions creator
export const setProductByIdToRedux=(payload)=>({type: GET_PRODUCT_BY_ID, payload})
export const toggleIsFetching = (isFetching) => ({type: BY_ID_IS_FETCHING, isFetching})

//////actions creator

export const getProductByIdThunk=(id)=>
    async  dispatch => {
    debugger;
    store.dispatch(toggleIsFetching(true));
    await dataAPI.getByIdProductsApi(id)
        .then(data => {
            console.log(data);
            store.dispatch(setProductByIdToRedux(data))
        });
    store.dispatch(toggleIsFetching(false));

}


export default ProductsByIdReducer;