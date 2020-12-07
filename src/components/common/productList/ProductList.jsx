import React, { useEffect, useState } from "react";
import { ProductCard } from "../productCard";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const ProductList = () => {
  const [productsOne, setProductsOne] = useState([""]);
  const [productsTwo, setProductsTwo] = useState([""]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/narek941/FakeJSONPlaceholder/product"
      );
      const data = await response.data;
      setProductsOne(data.slice(0,3));
      setProductsTwo(data.slice(3));

    } catch (e) {
    } finally {
    }
  };


  return (
    <Grid container spacing={1}>
     
        <Grid container item xs={12} spacing={6}>
          <ProductCard />
        </Grid>
     

      
         <Grid container item xs={12} spacing={6}>
          <ProductCard/>
        </Grid> 
     
    </Grid>
  );
};

export default ProductList;
