import React, { useState, useEffect } from "react";


const ProductDetail = (id) => {

    return (
        <>
            <div className={styles.cardContainer} key={index}>
                <div>
                    <img className={styles.card} src={item.img} />
                    <div className={styles.cardInfoContent}>

                        <div className={styles.cardTitle}>
                            {item.title}
                            <span>{item.price}$</span>
                        </div>
                        <div className={styles.cardAction}>
                            <span className={styles.icon}><IconButton type="basketOrange" /></span>
                            <span className={styles.btn}><NoosaButton type="product">Shop Now</NoosaButton></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default ProductDetail;
