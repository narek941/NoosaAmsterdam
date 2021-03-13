import React from "react";
import { ProductCard } from "../productCard";
import styles from "./ProductList.module.css";

const ProductList = ({bestProduct}) => {
    return (
    <section>
      <div className={styles.productList}>
        <div className={styles.productTitle}>Best Offers</div>
        <div>
          <label >
            <ProductCard products={bestProduct.slice(0, 3)} />
          </label>
           <label>
            <ProductCard products={bestProduct.slice(3, 6)} />
          </label>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
