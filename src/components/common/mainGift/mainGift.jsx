import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import styles from "./MainGift.module.scss";

const MainGift = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content_text}>
          Buy a gift card for any price and you are free, from further choice of
          gifts.
        </div>
        <NoosaButton className={styles.container__content_button}>
          Buy Now
        </NoosaButton>
      </div>
    </div>
  );
};

export default MainGift;
