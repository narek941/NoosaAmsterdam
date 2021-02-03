import React, { useEffect, useState } from "react";
import { ProductCard } from "../productCard";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import styles from "./ProductList.module.css";
import * as Api from "../../../services/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const s = Api.getLimitItems(6);
    s.then(function (value) {
      setProducts(value);
    });
  }, []);

  return (
    <section>
      <div className={styles.productList}>
        <div className={styles.productTitle}>Best Offers</div>
        <div>
          <label className={styles.productLabel}>
            <ProductCard products={products.slice(0, 3)} />
          </label>
           <label className={styles.productLabel}>
            <ProductCard products={products.slice(3, 6)} />
          </label> 
        </div>
      </div>
    </section>
  );
};

export default ProductList;
