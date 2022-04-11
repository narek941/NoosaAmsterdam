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
        <NoosaButton
          type="popup"
          width="78px"
          height="26px"
          borderRadius="4px"
          to="/basket"
        >
          0$
        </NoosaButton>
      </div>
      <div className={footerClassnames}>
        <NoosaButton
          type="popup"
          width="78px"
          height="26px"
          borderRadius="4px"
          to="/basket"
        >
          close
        </NoosaButton>
        <NoosaButton
          type="popup"
          width="78px"
          height="26px"
          borderRadius="4px"
          to="/order"
        >
          Checkout
        </NoosaButton>
      </div>
    </div>
  );
};

export default BacketPop;
