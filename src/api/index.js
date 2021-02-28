import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://noosa-amsterdam-aa87b-default-rtdb.europe-west1.firebasedatabase.app/',
 
});


export const dataAPI = {

    async getCarouselApi() {
         let carusel = await instance.get(`carousel.json`);
        return carusel;
    },


    async getAllProductsApi() {
        let response = await instance.get(`product.json`);
        return response;
    }
    
 
}


export const authAPI = {
    // me() {
    //     return instance.get(`auth/me`)
    // }
}