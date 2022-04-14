import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.scss";
import { TypeLinks, NoosaButton } from "../../../components/buttons";

const SignUp = (...props) => {
  // useEffect(() => {
  //   // const s = Api.getLimitItems(6);
  //   // // s.then(function (value) {
  //   // //   setProducts(value);});
  //   // const db =firebase.database();
  //   // console.log(db)

  // }, []);

  function handleSubmit(event) {
    // event.preventDefault();
    // console.log("submit")
    // firebase.auth().createUserWithEmailAndPassword(email,password)
    // .catch(error => console.log(error));
  }

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [postal, setPostal] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.mStyle}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.signUpInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input
              placeholder="Name"
              className={styles.signUpInput}
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <input
              placeholder="Adress"
              className={styles.signUpInput}
              autoFocus
              type="text"
              value={adress}
              onChange={(e) => setAdress(e.target.value)} />
            <input
              placeholder="Postal Code"
              className={styles.signUpInput}
              autoFocus
              type="postal"
              value={postal}
              onChange={(e) => setPostal(e.target.value)} />
            <input
              placeholder="Phone Number"
              className={styles.signUpInput}
              autoFocus
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} />
            <div className={styles.secondLine}>
              <input
                placeholder="Confirm password"
                className={styles.signUpInput}
                autoFocus
                type="password"
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} />
              <input
                placeholder="Last Name"
                className={styles.signUpInput}
                autoFocus
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
              <input
                placeholder="City"
                className={styles.signUpInput}
                autoFocus
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)} />
            </div> */}
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
