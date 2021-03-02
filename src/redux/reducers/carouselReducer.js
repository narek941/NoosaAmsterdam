import store from "../store";
const GET_CAROUSEL_ITEMS ="GET_CAROUSEL_ITEMS"

const INITIAL_STATE = {
    carousel: [{
        description: "Noosa Amsterdam Accessories that you create yourself",
        img : "https://i.ibb.co/F404sNP/118401854-129943792130911-7384229098764077942-o-2x.png",
        name: "New Collection"
    }]
};

///reducer
const CarouselReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_CAROUSEL_ITEMS":
            return {
                carousel: action.payload
            }
        default:
            return state
    }
}

///reducer

///actions

///actions
//////actions creator
export const actionSetCarouselToRedux=(payload)=>{
    return{
        type: GET_CAROUSEL_ITEMS,
        payload,
    }
}

//////actions creator

//store.dispatch(actionSetCarouselToRedux);


export default CarouselReducer;