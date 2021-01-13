import React, { useEffect, useState } from "react";
import { ProductCard } from "../productCard";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import styles from "./ProductList.module.css";
import * as Api from "../../../services/api";
const ProductList = () => {
const [products,setProducts] = useState([]);
  useEffect(() => {
 
   // fetchData();
   const s=Api.getLimitItems(6);
   s.then( function(value) { setProducts(value)},)
  }, []);
    

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://my-json-server.typicode.com/narek941/FakeJSONPlaceholder/product"
  //     );
  //     const data = await response.data;
  //     setProducts(data);
  //   } catch (e) {
  //   } finally {
    
  //   }
  // };


  return (
    
  
     <section>
<div className={styles.productList}>
    <div className={styles.title}>Best Offers</div>
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={6}>
        <ProductCard products={products.slice(0, 3)} />
      </Grid>
      <Grid container item xs={12} spacing={6}>
        <ProductCard products={products.slice(3, 6)} />
      </Grid>
    </Grid>
    </div>
    </section>
  );
};

export default ProductList;
