import React, { useState, useEffect } from 'react';
import NoosaButton from "../../buttons/NoosaButton";
import IconButton from '../../../img/IconButton';
import styles from './ProductCard.module.css'; 

const ProductCard = (products) => {
    
  return (
    products.products.map((item, index) => (
    <div className={styles.cardContainer} key={item.id}>
      <div className={styles.card}>
        <div className={styles.cardInfoContent}>
          <div>
            {item.title}
                  <span>{item.price}$</span> 
            <div>
              <IconButton type='basket' />
              <NoosaButton>Shop Now</NoosaButton>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
 ))

                
}

export default ProductCard;