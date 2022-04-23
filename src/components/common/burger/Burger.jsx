import React from "react";

import styles from './Burger.module.scss'

const Burger = ({ children, ...props }) => {
  return (
      <span className={styles.burger}>
      <label htmlFor="check" >
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
      </span>
  );
};

export default Burger;
