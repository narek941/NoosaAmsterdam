import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import styles from "./MainCarousel.module.css";


const MainCarousel = (props) => {
  return (
    <div
      className={styles.slider}
     style={{ backgroundImage: `url(${props.item.img})` }}
    >
      <section>
        <div className={styles.slider_itemContent}>
          <div className={styles.slider_title}>{props.item.name}</div>
          <div className={styles.slider_text}>{props.item.description}</div>
          <NoosaButton width="160px" height="56px" borderRadius="0px" >Shop Now</NoosaButton>
        </div>
      </section>
    </div>
  );
}
export default MainCarousel;
