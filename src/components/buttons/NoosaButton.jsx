import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
const NoosaButton = ({ to, children, className, type }) => {
  const classes = classNames(className, styles.btn);

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default NoosaButton;
