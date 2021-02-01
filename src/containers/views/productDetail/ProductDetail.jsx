import React, { useState, useEffect } from "react";
import styles from './ProductDetail.module.css';
import { TypeLinks, NoosaButton } from '../../../components/buttons';
import IconButton from "../../../img/IconButton";

const item =
{
    "color": "White",
    "category": "bracelet",
    "description": "The classic NOOSA-Amsterdam bracelet from the Indian Summer collection.",
    "details": "The wallet is crafted according to the values ​​of the artisans of the Belgian leather manufactory. The accessory is presented in three colors - sage, blue and apricot. Three NOOSA-Amsterdam buttons can be attached to the product. The belt has colored metal clips.",
    "id": "1",
    "img": "https://i.ibb.co/RhPw5dq/product-1.png",
    "material": "Leather",
    "price": "36",
    "sale": "10",
    "sex": "women",
    "size": ["s", "xl", "xxl"],
    "title": "Classic Bracelet Mamba",
    "total": "24"
}

const ProductDetail = () => {
    console.log(item)
    return (
        <section>
            <h1>Home / Products / Women / Braclets</h1>
            <div className={styles.mainProductDetail}>
                <img className={styles.ProductDetailImg} src={item.img} alt="img" />
                <div className={styles.cardDetailInfoContent}>
                    <div className={styles.cardDetailTitle}>
                        {item.title}
                    </div>
                    <div className={styles.cardDetailDescription}>{item.description}</div>
                    <div className={styles.cardDetailPrice}>Price {item.price}$</div>
                    <div className={styles.cardDetailSizeContainer}>
                        {
                           
                            item.size.map((n) =>
                            <label className={styles.cardDetailSize}><input className={styles.cardDetailRadio} type="radio" name="radio"></input></label>

                                
                            )
                        }
                    </div>
                    <div className={styles.cardAction}>
                        <span className={styles.btn}><NoosaButton type="product">Shop Now</NoosaButton></span>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default ProductDetail;
