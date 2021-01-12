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
    <div className={styles.cardContainer} key={index}>
      <div>
        <img className={styles.card} src={item.img} alt="img" />
        <div className={styles.cardInfoContent}>
          
          <div className={styles.cardTitle}>
            {item.title}
            <span>{item.price}$</span>
            {/* {productInBasket} */}
          </div>
          <div className={styles.cardAction}>
            <span onClick ={()=>dispatch(addProductInBasket(item.id))} className={styles.icon}><IconButton  type="basketOrange" /></span>
            <span className={styles.btn}><NoosaButton  type="product">Shop Now</NoosaButton></span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ProductCard;
