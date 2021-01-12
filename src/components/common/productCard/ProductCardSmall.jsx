import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from "../../../img/IconButton";
import styles from "./ProductCard.module.css";
import {useSelector,useDispatch} from 'react-redux';
import {addProductInBasket,minusProductInBasket} from "../../../redux/actions/backetActions";

const ProductCard = (products) => {
  const productInBasket = useSelector(state => state.Backet.productInBasket);
  const dispatch = useDispatch();

  return products.products.map((item,index) => (
    <div className={styles.smallCardContainer} key={index}>
      <div>
        <img className={styles.smallCard} src={item.img} alt="img" />
        <div className={styles.smallCardInfoContent}>
          
          <div className={styles.smallCardTitle}>
            {item.title}
            <span>{item.price}$</span>
          </div>
          <div className={styles.cardAction}>
            <span onClick ={()=>dispatch(addProductInBasket(item.id))} className={styles.smallIcon}><IconButton type="basketOrange" /></span>
            <span className={styles.smallBtn}><NoosaButton  type="product">Shop Now</NoosaButton></span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ProductCard;