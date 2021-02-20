import * as axios from "axios";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCUzCvuEVF2uOkVaRBGLC1zgHGOKFPOo6M",
    authDomain: "noosa-amsterdam-aa87b.firebaseapp.com",
    databaseURL: "https://noosa-amsterdam-aa87b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "noosa-amsterdam-aa87b",
    storageBucket: "noosa-amsterdam-aa87b.appspot.com",
    messagingSenderId: "376720524206",
    appId: "1:376720524206:web:fa7000a27d6f48147b3e3f",
    measurementId: "G-97RSKL3H1P"
};
firebase.initializeApp(firebaseConfig);


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