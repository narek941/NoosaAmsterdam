import {db} from "../firebase/utils";

export const dataAPI = {



    async getCarouselApi() {
        const caruselRef = db.collection("carousel");
        const carousel = await caruselRef
            .get()
            .then(snapshot => {
                const carousels = snapshot.docs.map(doc=>({
                    id: doc.id,
                   ...doc.data()
                }));
                console.log(carousels);
                return carousels;
        })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    },


    async getAllProductsApi() {
        const allProductRef = db.collection("products");
        const product = await allProductRef
            .orderBy('id')
            .limit(9)
            .get()
            .then(snapshot => {
                const products = snapshot.docs.map(doc=>({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log(products);
                return products;
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    },

    async getByIdProductsApi(id) {
        const byIdProductRef = db.collection("products");
        const product = await byIdProductRef.
        where('id','==', id)
            .get()
            .then(snapshot => {
                const products = snapshot.docs.map(doc=>({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log(products);
                return products;
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }

}


export const authAPI = {

}