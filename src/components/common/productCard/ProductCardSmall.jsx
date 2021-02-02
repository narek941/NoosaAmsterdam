import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from "../../../img/IconButton";
import styles from "./ProductCard.module.css";
import {useSelector,useDispatch} from 'react-redux';
import {addProductInBasket,minusProductInBasket} from "../../../redux/actions/backetActions";
import Like from '../../../img/Like';
import { NavLink as RouterNavLink } from 'react-router-dom';

const ProductCard = (products) => {
  const productInBasket = useSelector(state => state.Backet.productInBasket);
  const dispatch = useDispatch();

  return products.products.map((item,index) => (
    <div className={styles.smallCardContainer} key={index}>
      <div>
        <img className={styles.smallCard} src={item.img} alt="img" />
        <div className={styles.smallCardInfoContent}>
        <div>
          <span className={styles.smallCardTitle}>{item.title}</span>  
            <span className={styles.smallCardPrice}>{item.price}$</span>
          </div>
          <div className={styles.cardAction}>
            <span onClick ={()=>dispatch(addProductInBasket(item.id))} className={styles.smallIconBasket}><IconButton type="basketOrange" /></span>
            <span className={styles.smallBtn}><NoosaButton  type="product">Shop Now</NoosaButton></span>
          </div>
        </div>
      </div>
      <span className={styles.likeSmall}><Like/></span>
    </div>
  ));
};

export default ProductCard;