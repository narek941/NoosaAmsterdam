import React from "react";
import styles from "./BacketPop.module.scss";
import { NoosaButton } from "../../buttons";
import classNames from "classnames";

const BacketPop = (...props) => {
  const footerClassnames = classNames(
    styles.backetPopup_button_wrapper,
    styles.backetPopup_button_footer
  );
  return (
    <div className={styles.backetPopup}>
      <div className={styles.backetPopup_content}>
        There are no elements yet
      </div>
      <div className={styles.backetPopup_button_wrapper}>
        <p>Total</p>
        <span>0$</span>
      </div>
      <div className={footerClassnames}>
        <NoosaButton
          className={styles.backetPopup_button_footer_button}
          to="/basket"
        >
          close
        </NoosaButton>
        <NoosaButton
          className={styles.backetPopup_button_footer_button}
          to="/order"
        >
          Checkout
        </NoosaButton>
      </div>
    </div>
  );
};

export default BacketPop;
