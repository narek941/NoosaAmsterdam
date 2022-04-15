import React from "react";
import styles from "./SignUp.module.scss";
import { NoosaButton } from "../../../components/buttons";

const SignUp = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className={styles.container}>
      <div className={styles.signUpForm}>
        <div className={styles.signUpFormIn}>
          <div className={styles.formHeader}>
            <h1>New Customer</h1>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              className={styles.signUpInput}
              autoFocus
              type="email"
              autoComplete="false"
            />
            <input
              type="text"
              placeholder="Password"
              className={styles.signUpInput}
              autoComplete="false"
            />
            <input
              placeholder="Name"
              autoComplete="false"
              className={styles.signUpInput}
              autoFocus
              type="text"
            />
            <input
              placeholder="Address"
              autoComplete="false"
              className={styles.signUpInput}
              autoFocus
              type="text"
            />
            <input
              placeholder="Postal Code"
              autoComplete="false"
              className={styles.signUpInput}
              autoFocus
              type="postal"
            />
            <input
              placeholder="Phone Number"
              autoComplete="false"
              className={styles.signUpInput}
              autoFocus
              type="tel"
            />
            <div className={styles.secondLine}>
              <input
                placeholder="Confirm password"
                autoComplete="false"
                className={styles.signUpInput}
                autoFocus
                type="password"
              />
              <input
                placeholder="Last Name"
                className={styles.signUpInput}
                autoComplete="false"
                autoFocus
                type="text"
              />
              <input
                placeholder="City"
                className={styles.signUpInput}
                autoComplete="false"
                autoFocus
                type="text"
              />
            </div>
            <NoosaButton type="submit" className={styles.button}>
              Register now
            </NoosaButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
