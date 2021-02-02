import Banner from "../../../components/common/banner"
import React, { useEffect, useState } from "react";
import { ProductCardSmall } from "../../../components/common/productCard";
import Grid from "@material-ui/core/Grid";
import { Pagination } from '@material-ui/lab';
import styles from "./Product.module.css";
import * as Api from "../../../services/api";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
   const s = Api.getProductWithPassedPageNumber(pageNumber);
   s.then(function (value) {
    setProducts(value);
    setTotalCount(value[0].total);
  },)
  }, [pageNumber]);

  useEffect(() => {
    const s = Api.getProductWithPassedPageNumber(1);
    s.then(function (value) {setProducts(value);
      setTotalCount(value[0].total);
    },)
  }, []);

  useEffect(() => {
    let pages = Math.ceil(totalCount / 9);
    setPageCount(pages);
    console.log(products);
  }, [products, totalCount]);

  return (
    <>
      <Banner />
      <section className={styles.section}>
        {/* <form className={styles.filter}>
          Home / Products
          <table>
            <tr>
              <th>Women</th>
              <th>v</th>
            </tr>
            <tr>
              <th>Men</th>
              <th>v</th>
            </tr>
            <tr>
              <th>Braclets</th>
              <th>v</th>
            </tr>
            <tr>
              <th>Buttons</th>
              <th>v</th>
            </tr>
            <tr>
              <th>Belts</th>
              <th>v</th>
            </tr>
            <tr>
              <th>Bags</th>
              <th>v</th>
            </tr>
            <tr>
              <th>Wallets</th>
              <th>v</th>
            </tr>
            <tr>
              <th>Collections</th>
              <th>v</th>
            </tr>
            <tr>
              <th>Sale</th>
              <th>v</th>
            </tr>
            <tr>
              <th>Size</th>
              <th>v</th>
            </tr>
          

   

          </table>
        </form> */}

        <div className={styles.productList}>
          SORT BY
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
          <Pagination className={styles.pagination}
            page={pageNumber}
            count={pageCount}
            variant="outlined"
            shape="rounded"
            onChange={(ev, page) => {
            setPageNumber(page)
            }} />
        </div>
      </section>
    </>
  )
}

export default Product;
