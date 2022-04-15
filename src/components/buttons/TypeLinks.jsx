import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Button.module.scss";

const TypeLinks = ({ to, children, className }) => {
  const classes = classNames(className, styles.link);

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
};

export default TypeLinks;
