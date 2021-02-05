import React from "react";
import styles from "./Order.module.css";

const Order = (...props) => {
  return (
    <section>
      <div className={styles.order_container}>
        <div className={styles.orderCard}>
          <label className={styles.orderCard__basket}>hhk</label>
          <label className={styles.orderCard__check}></label>
        </div>
        <div className={styles.deliveryAddress}>
          <form className="form">
            <h2 className="form-h2">Contact form</h2>
            <div className="input-form">
              <input
                type="text"
                placeholder="Your name"
                className="form-label"
              />
              <input
                type="text"
                placeholder="Your name"
                className="form-label"
              />
            </div>
            <textarea placeholder="Message..." className="form-textarea" />
          </form>
        </div>
        <div className={styles.payment}></div>
      </div>
    </section>
  );
};

export default Order;
