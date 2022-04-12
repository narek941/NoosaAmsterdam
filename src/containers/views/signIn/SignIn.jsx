import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import { TypeLinks, NoosaButton } from "../../../components/buttons";
import { ReactComponent as TickIcon } from "../../../assets/Tick.svg";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";

const SignIn = (...props) => {
  async function handleSubmit(event) {
    event.preventDefault();
    // firebase.auth().signInWithEmailAndPassword(email, password)
    // .catch(error => console.log(error));
  }
  const [remember, setRemember] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.sign__wrapper}>
        <div className={styles.sign__wrapper_header}>
          <p>Sign In</p>
          <TypeLinks type="navigationBig" to="signUp">
            New Customer
          </TypeLinks>
        </div>
        <form className={styles.sign__wrapper_form} onSubmit={handleSubmit}>
          <TextField label="Email" />
          <TextField label="password" />

          <div
            className={styles.sign__wrapper_check}
            onClick={() => setRemember(!remember)}
          >
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={remember}
            />
            <span className={styles.sign__wrapper_check_tick}>
              {remember && <TickIcon />}
            </span>

            <label htmlFor="remember">remember me</label>
          </div>
          <NavLink className={styles.sign__wrapper_link} to="forgot">
            Forgot your password?
          </NavLink>

          <NoosaButton
            type="submit"
            width="430px"
            height="48px"
            borderRadius="10px"
            className={styles.sign__wrapper_btn}
          >
            Sign In
          </NoosaButton>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
