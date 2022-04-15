import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from "../../../img/IconButton";
import styles from "./ProductCard.module.scss";
import Like from "../../../img/Like";
import { NavLink } from "react-router-dom";

const ProductCard = ({ id, img, title, price }) => {
  return (
    <div className={styles.card}>
      <NavLink to={"productDetail/id=" + id}>
        <img className={styles.card__img} src={img} alt="img" />
      </NavLink>
      <div className={styles.card__info}>
        <div className={styles.card__info_text}>
          <span className={styles.card__info_text_title}>{title}</span>
          <span className={styles.card__info_text_price}>{price}$</span>
        </div>
        <div className={styles.card__info_actions}>
          <span className={styles.card__info_actions_basket}>
            <IconButton type="basketOrange" />
          </span>
          <NoosaButton className={styles.card__info_actions_button}>
            Shop Now
          </NoosaButton>
        </div>
      </div>
      <span className={styles.card__like}>
        <Like />
      </span>
    </div>
  );
};

export default ProductCard;
