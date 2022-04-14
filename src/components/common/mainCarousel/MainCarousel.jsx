import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import styles from "./MainCarousel.module.scss";

const MainCarousel = ({ item }) => {
  return (
    <div
      className={styles.slider}
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <section>
        <div className={styles.slider_itemContent}>
          <h2 className={styles.slider_title}>{item.name}</h2>
          <h3 className={styles.slider_text}>{item.description}</h3>
          <NoosaButton>Shop Now</NoosaButton>
        </div>
      </section>
    </div>
  );
};
export default MainCarousel;
