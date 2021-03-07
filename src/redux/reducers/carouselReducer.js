import store from "../store";
import {dataAPI} from "../../api";
const GET_CAROUSEL_ITEMS ="GET_CAROUSEL_ITEMS"

const INITIAL_STATE = {
    carousel:[]
};

///reducer
const CarouselReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CAROUSEL_ITEMS:
            return {
                carousel: action.payload
            }
        default:
            return state
    }
}

///reducer

//////actions creator
export const actionSetCarouselToRedux=(payload)=>({type: GET_CAROUSEL_ITEMS,payload})


//////actions creator

export const getCarouselThunk = dispatch => {
        console.log('loading')
        dataAPI.getCarouselApi()
        .then(data => {
            console.log(data);
            store.dispatch(actionSetCarouselToRedux(data))
        });
        console.log('loading is fin' )
    }


export default CarouselReducer;