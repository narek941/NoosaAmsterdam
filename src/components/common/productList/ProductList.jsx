import React from "react";
import { ProductCard } from "../productCard";
import styles from "./ProductList.module.css";

const ProductList = (props) => {

  return (
    <section>
      <div className={styles.productList}>
        <div className={styles.productTitle}>Best Offers</div>
        <div>
          <label className={styles.productLabel}>
            <ProductCard products={props.item.slice(0, 3)} />
          </label>
           <label className={styles.productLabel}>
            <ProductCard products={props.item.slice(3, 6)} />
          </label> 
        </div>
      </div>
    </section>
  );
};

export default ProductList;
