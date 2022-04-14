import React from "react";
import styles from "./SignPop.module.scss";
import { TypeLinks } from "../../buttons";
const SignPop = (...props) => {
  return (
    <div className={styles.signPopup}>
      <h3>Sign In</h3>
      <TypeLinks to="/signIn" className={styles.sign_in}>
        Sign In
      </TypeLinks>
      <TypeLinks to="/signUp" className={styles.sign_up}>
        Create an account
      </TypeLinks>
    </div>
  );
};

export default SignPop;
