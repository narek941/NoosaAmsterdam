import React from 'react';
import NoosaButton from "../../buttons/NoosaButton";
import gift_bg from '../../../img/gift_bg.png'
const MainGift = (props) => {

 
  
  return (
    <div className={styles.mainStyle} >
      <div className={styles.content}>
          <div className={styles.text}>
              Buy a gift card for any price and you are free, from further choice of gifts.
              </div>
              <div className={styles.button}>
                  <NoosaButton >Shop Now</NoosaButton>
              </div>
          
      </div>
        
       
    </div>


  )
}

export default MainGift;