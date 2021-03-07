import {db} from "../firebase/utils";

export const dataAPI = {



    async getCarouselApi() {
        return await db.collection("carousel")
            .get()
            .then(snapshot => {
                const items = snapshot.docs.map(doc=>({
                    id: doc.id,
                   ...doc.data()
                }));
                console.log(items);
                return items;
        })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    },


    async getAllProductsApi(limit=12) {
        return await db.collection("products")
            .orderBy('id')
            .limit(limit)
            .get()
            .then(snapshot => {
                const items = snapshot.docs.map(doc=>({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log(items);
                return items;
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    },

    async getByIdProductsApi(id) {
        return await db.collection("products")
            .where('id','==', id)
            .get()
            .then(snapshot => {
                const items = snapshot.docs.map(doc=>({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log(items);
                return items;
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }

}


export const authAPI = {

}