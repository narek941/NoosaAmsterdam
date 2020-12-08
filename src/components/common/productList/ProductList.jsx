import React, { useEffect, useState } from "react";
import { ProductCard } from "../productCard";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const ProductList = () => {
  const [products, setProducts] = useState([""]);
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
     
      console.log(data);
      setProducts(data);
      
    } catch (e) {
    } finally {
    }
  };
 
    
      
console.log(products)
  return (
   
    
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={6}>
      <ProductCard products={products.slice(0,3)}/>
      </Grid>
       <Grid container item xs={12} spacing={6}>
      <ProductCard products={products.slice(3)}/>
      </Grid> 
      </Grid>
  );
};

export default ProductList;
