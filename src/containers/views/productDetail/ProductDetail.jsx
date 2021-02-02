import React, { useState, useEffect } from "react";
import styles from './ProductDetail.module.css';
import { TypeLinks, NoosaButton } from '../../../components/buttons';
import IconButton from "../../../img/IconButton";
import Like from '../../../img/Like';

const item =
{
    "color": "White",
    "category": "bracelet",
    "description": "The classic NOOSA-Amsterdam bracelet from the Indian Summer collection.",
    "details": "The wallet is crafted according to the values ​​of the artisans of the Belgian leather manufactory. The accessory is presented in three colors - sage, blue and apricot. Three NOOSA-Amsterdam buttons can be attached to the product. The belt has colored metal clips.",
    "id": "1",
    "img": ["https://i.ibb.co/RhPw5dq/product-1.png"],
    "material": "Leather",
    "price": "36",
    "sale": "10",
    "sex": "women",
    "size": ["xs", "s", "m"],
    "title": "Classic Bracelet Mamba",
    "total": "24",

}


const ProductDetail = () => {

    return (

        <section className={styles.sectionProductDetail}>
            <span className={styles.mainH}>Home / Products / {item.sex} / {item.category}</span>
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
                                <div key={n} className={styles.cardDetailLabel}>
                                    <input className={styles.sizeInput} type="radio" id="option-one" name="selector" ></input>
                                    <label className={styles.sizeLabel} for="option-one">{n}</label>
                                </div>)
                        }
                    </div>
                    <div>

                    </div>
                    <div className={styles.cardAction}>
                        <span className={styles.btnProductDetail}><NoosaButton type="product">Buy Now</NoosaButton></span>
                    </div>
                    <div className={styles.ProductDetail}>
                        <div className={styles.ProductDetailTextTitle}>Product Details</div>
                        <div className={styles.ProductDetailText}>{item.details}</div>
                    </div>
                </div>
            <span className={styles.ProductDetailLike}><Like/></span>
            </div>
            <div className={styles.similarProduct}>
                <img className={styles.similarProductImg} src={item.img} alt="img1" />
                <img className={styles.similarProductImg} src={item.img} alt="img2" />
                <img className={styles.similarProductImg} src={item.img} alt="img3" />
            </div>
        </section>

    );

}

export default ProductDetail;
