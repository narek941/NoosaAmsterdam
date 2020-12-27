import Banner from "../../../components/common/banner"
import React, { useEffect, useState } from "react";
import { ProductCard } from "../../../components/common/productCard";
import Grid from "@material-ui/core/Grid";
import { useDataFetching } from "../../../hooks";

const Product = () => {
  const { data, error, loading } = useDataFetching("https://my-json-server.typicode.com/narek941/FakeJSONPlaceholder/product");
 
  return (
    <>
      <Banner />
      <section>
        <div>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <ProductCard products={data.slice(0, 3)} />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <ProductCard products={data.slice(3, 6)} />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <ProductCard products={data.slice(4, 7)} />
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  )
}

export default Product;
