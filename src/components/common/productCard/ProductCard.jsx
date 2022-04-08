import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from "../../../img/IconButton";
import styles from "./ProductCard.module.scss";
import Like from "../../../img/Like";
import { NavLink } from "react-router-dom";

const ProductCard = (products) => {
  return products.products.map((item, index) => (
    <div className={styles.cardContainer} key={index}>
      <div>
        <NavLink to={"productDetail/id=" + item.id}>
          <img className={styles.card} src={item.img} alt="img" />
        </NavLink>
        <div className={styles.cardInfoContent}>
          <div>
            <span className={styles.cardTitle}>{item.title}</span>
            <span className={styles.cardPrice}>{item.price}$</span>
          </div>
          <div className={styles.cardAction}>
            <span className={styles.iconBasket}>
              <IconButton type="basketOrange" />
            </span>
            <span className={styles.btn}>
              <NoosaButton width="112px" height="36px" borderRadius="4px">
                Shop Now
              </NoosaButton>
            </span>
          </div>
        </div>
      </div>
      <span className={styles.like}>
        <Like />
      </span>
    </div>
  ));
};

export default ProductCard;
