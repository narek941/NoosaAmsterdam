import React, { useState } from 'react';
import styles from "./SearchResultItem.module.css";

const SearchResultitem = (item,...props) => {

console.log(item.item);
    return (
        <div  className={styles.card} key={item.item.id}>
            <div >
                <img  className={styles.img} src={item.item.img} alt="img" />
                <div >

                    <div className={styles.info}> 
                        {item.item.title}
                        <span  className={styles.price}>{item.item.price}$</span>
                    </div>
                   
                </div>
            </div>
        </div>
  );
};

export default SearchResultitem;