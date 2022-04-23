import React from "react";
import { ProductCard } from "../productCard";
import styles from "./ProductList.module.scss";

const ProductList = ({bestProduct}) => {

  const render= bestProduct.map(({id,img,title,price},index)=>(
    <div className={styles.productList_inner}> 
    <ProductCard id={id} img={img} title = {title} price ={price} key={index}/>
    </div>
   
  ))

    return (
    <section>
      <div className={styles.productList}>
        <h2 className={styles.productList_title}>Best Offers</h2>
        <div className={styles.productList_wrapper}>
       {render}
         </div>
        
      </div>
    </section>
  );
};

export default ProductList;
