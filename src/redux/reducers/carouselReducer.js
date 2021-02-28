// const GET_CAROUSEL = 'GET_CAROUSEL';
// import { dataAPI } from '../../../api';


// // export function getcarouselData(url) {
// //     return (dispatch) => {
// //         dataAPI.getAllProductsApi().then(res => {
// //             return res.data;
// //         }).then(data => dispatch(carouselItemSuccess(data)))
// //     }
// // }


// ////reducer
// let initialState = {
//     carousel: [],
// }

// export  default function carouselReducer(state = initialState, action) {
//     switch (action.type) {
//       case  GET_CAROUSEL:{
//           return{ carousel: action.carousel}
//       }
//       default:
//         return state
//     }
//   }
// ////reducer


// ///action creator
// export const  getCarouselByApi=()=>({type: GET_CAROUSEL});

// ///action creator

// ////actions
// export const requestCarousel = ()=>{
//     return async (dispatch) => {
//         dispatch(getCarouselByApi());
// }




// ////actions