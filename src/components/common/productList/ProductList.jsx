import React from "react";
import { ProductCard } from "../productCard";
import styles from "./ProductList.module.scss";

const ProductList = ({bestProduct}) => {
    return (
    <section>
      <div className={styles.productList}>
        <h2 className={styles.productList_title}>Best Offers</h2>
        <div className={styles.productList_wrapper}>
           {bestProduct.map(({id,img,title,price},index)=>(
           <ProductCard id={id} img={img} title = {title} price ={price} key={index}/>
         ))}
         </div>
        
      </div>
    </section>
  );
};

export default ProductList;
