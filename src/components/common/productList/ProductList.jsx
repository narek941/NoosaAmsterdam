import React, { useEffect, useState } from "react";
import { ProductCard } from "../productCard";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import styles from "./ProductList.module.css";
import IconButton from "../../../img/IconButton";
import { useDataFetching } from "../../../hooks";
import CircularProgress from '@material-ui/core/CircularProgress';

const ProductList = () => {

  useEffect(() => {
    //fetchData();
    console.log(data)
   
  }, []);
    const { data , error, loading} = useDataFetching("https://my-json-server.typicode.com/narek941/FakeJSONPlaceholder/product");
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
        <ProductCard products={data.slice(0, 3)} />
      </Grid>
      <Grid container item xs={12} spacing={6}>
        <ProductCard products={data.slice(3, 6)} />
      </Grid>
    </Grid>
    </div>
    </section>
  );
};

export default ProductList;
