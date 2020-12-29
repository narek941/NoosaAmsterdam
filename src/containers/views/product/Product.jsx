import Banner from "../../../components/common/banner"
import React, { useEffect, useState } from "react";
import { ProductCardSmall } from "../../../components/common/productCard";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {Alert, AlertTitle, Pagination} from '@material-ui/lab';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    fetchData(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    fetchData(1);
  }, []);

  useEffect(() => {
    let pages = Math.ceil(totalCount / 9);
    //pages = pages > 100 ? 100 : pages;
    setPageCount(pages);
    console.log(products);

  }, [products, totalCount]);

  const fetchData = async (passedPageNumber) => {
    
      const response = await axios.get(
        "https://my-json-server.typicode.com/narek941/FakeJSONPlaceholder/product",{
          params: {
            //per_page: 9,
            //_page: passedPageNumber ? passedPageNumber : pageNumber,
            //_limit: 9
            
          }}
      );
      const data = await response.data;
      setProducts(data);
      setTotalCount(data.length)
 
  };
 
  return (
    <>
      <Banner />
      <section>
        <div>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <ProductCardSmall products={products.slice(0, 3)} />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <ProductCardSmall products={products.slice(3, 6)} />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <ProductCardSmall products={products.slice(4, 7)} />
            </Grid>
          </Grid>
        </div>
        <Pagination style={{
          margin: 'auto',
          marginTop: '50px',
          width: 'fit-content'
        }}
          page={pageNumber}
          count={pageCount}
          variant="outlined"
          shape="rounded"
          onChange={(ev, page) => {
            setPageNumber(page)
          }} />
    
    </section>
    </>
  )
}

export default Product;
