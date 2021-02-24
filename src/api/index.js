import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://noosa-amsterdam-aa87b-default-rtdb.europe-west1.firebasedatabase.app/',

});


export const dataAPI = {
    getCarouselApi() {
        return instance.get(`carousel.json?print=pretty`)
            .then(response => {
                return response.data;
                
            });
    },
    getProductsApi(limit = 10) {
        return instance.get(`product.json?print=pretty`)
            .then(response => {
                console.log(response)
                return response.data;
                
            });
    },
    

}


export const authAPI = {
    // me() {
    //     return instance.get(`auth/me`)
    // }
}