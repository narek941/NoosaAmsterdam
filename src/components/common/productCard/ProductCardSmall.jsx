import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from "../../../img/IconButton";
import styles from "./ProductCard.module.scss";
import Like from "../../../img/Like";
import { NavLink } from "react-router-dom";

const ProductCard = (products) => {
  return products.products.map((item, index) => (
    <div className={styles.smallCardContainer} key={index}>
      <div>
        <NavLink to={"productDetail/id=" + item.id}>
          <img className={styles.smallCard} src={item.img} alt="img" />
        </NavLink>
        <div className={styles.smallCardInfoContent}>
          <div>
            <span className={styles.smallCardTitle}>{item.title}</span>
            <span className={styles.smallCardPrice}>{item.price}$</span>
          </div>
          <div className={styles.cardAction}>
            <span
              //  onClick ={()=>dispatch(addProductInBasket(item.id))}
              className={styles.iconBasket}
            >
              <IconButton type="basketOrange" />
            </span>
            <span className={styles.smallBtn}>
              <NoosaButton>Shop Now</NoosaButton>
            </span>
          </div>
        </div>
      </div>
      <span className={styles.likeSmall}>
        <Like />
      </span>
    </div>
  ));
};

export default ProductCard;
