import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import styles from "./MainCarousel.module.css";
import Carousel from "react-material-ui-carousel";


const MainCarousel = ({item}) => {
  return (
    <div
       className={styles.slider}
        style={{ backgroundImage: `url(${item.img})` }}
     >
       <section>
         <div className={styles.slider_itemContent}>
           <div className={styles.slider_title}>{item.name}</div>
           <div className={styles.slider_text}>{item.description}</div>
           <NoosaButton width="160px" height="56px" borderRadius="0px" >Shop Now</NoosaButton>
         </div>
       </section>
    </div>
  );
}
export default MainCarousel;
