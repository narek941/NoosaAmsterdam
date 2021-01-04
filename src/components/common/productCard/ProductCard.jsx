import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from "../../../img/IconButton";
import styles from "./ProductCard.module.css";

const ProductCard = (products) => {
  return products.products.map((item,index) => (
    <div className={styles.cardContainer} key={index}>
      <div>
        <img className={styles.card} src={item.img} alt="img" />
        <div className={styles.cardInfoContent}>
          
          <div className={styles.cardTitle}>
            {item.title}
            <span>{item.price}$</span>
          </div>
          <div className={styles.cardAction}>
            <span className={styles.icon}><IconButton type="basketOrange" /></span>
            <span className={styles.btn}><NoosaButton  type="product">Shop Now</NoosaButton></span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ProductCard;
