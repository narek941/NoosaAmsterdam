import React, { useEffect, useState } from "react";
import { ProductCard } from "../productCard";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import styles from "./ProductList.module.css";
import * as Api from "../../../services/api";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/storage';

const ProductList = (props) => {
  console.log(props.item)


  return (
    !props.item ?
     <></> :
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
