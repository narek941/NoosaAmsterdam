import React from "react";
import styles from "./BacketPop.module.scss";
import { TypeLinks } from "../../buttons";
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
        <TypeLinks to="/basket">0$</TypeLinks>
      </div>
      <div className={footerClassnames}>
        <TypeLinks to="/basket">close</TypeLinks>
        <TypeLinks to="/order">Checkout</TypeLinks>
      </div>
    </div>
  );
};

export default BacketPop;
