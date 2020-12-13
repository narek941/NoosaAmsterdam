import React, { useState, useEffect } from "react";
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from "../../../img/IconButton";
import styles from "./ProductCard.module.css";
import CardMedia from "@material-ui/core/Grid";

const ProductCard = (products) => {
  return products.products.map((item) => (
    <div className={styles.cardContainer} key={item.id}>
      <div>
        <img className={styles.card} src={item.img} />
        <div className={styles.cardInfoContent}>
          <div className={styles.cardTitle}>
            {item.title}
            <span>{item.price}$</span>
          </div>
          <div className={styles.cardAction}>
            <IconButton type="basket" />
            <NoosaButton type="product">Shop Now</NoosaButton>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ProductCard;
