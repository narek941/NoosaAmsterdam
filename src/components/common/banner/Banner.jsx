import React from "react";
import NoosaButton from "../../buttons/NoosaButton";
import styles from "./Banner.module.scss";
const Banner = (props) => {
  return (
    <div className={styles.banner}>
      <section>
        <div className={styles.banner__content}>
          <div className={styles.banner__content__text}>
            Tell your story with the unique Noosa Amsterdam collection
          </div>
          <div className={styles.banner__content__button}>
            <NoosaButton>Shop Now</NoosaButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
