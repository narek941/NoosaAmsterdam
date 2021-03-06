import React, {useEffect, useState } from 'react';
import styles from './SignIn.module.css';
import { TypeLinks, NoosaButton } from '../../../components/buttons';
import Tick from "../../../img/Tick";


const SignIn = (...props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberpassword, setRememberPassword] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

   async function handleSubmit (event) {
     event.preventDefault();
    // firebase.auth().signInWithEmailAndPassword(email, password)
    // .catch(error => console.log(error));
  }


  return (
      <div className={styles.mainStyle}>
        <div className={styles.signInForm}>
          <div className={styles.signInFormIn}>
            <div className={styles.formHeader}>
              <h1>Sign In</h1>
              <TypeLinks type="navigationBig" to="signUp">New Customer</TypeLinks>
            </div>
            <form className={styles.form}>
              <input
                  placeholder="Email"
                  className={styles.loginInput}
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              <div>
                <input type="password"
                       placeholder="Password"
                       className={styles.loginInput}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className={styles.formCheck}>
                <label className={styles.checkboxLabel}>
                  {rememberpassword &&
                  <span className={styles.tick}> <Tick/></span>


                  }
                  <input
                      type="checkbox"
                      className={styles.formCheckInput}
                      checked={rememberpassword}
                      onChange={() => setRememberPassword(!rememberpassword)}
                  />
                </label>

                <label className={styles.rememberMe}>Remember me</label>
              </div>
              <TypeLinks type="navigationBig" to="signUp">Forgot your password?</TypeLinks>
              <span>
              <NoosaButton>Sign In With Google</NoosaButton>
            </span>

              <NoosaButton type="submit" disabled={!validateForm()} width="430px" height="48px" borderRadius="10px">Sign
                In</NoosaButton>
            </form>
          </div>
        </div>
      </div>
  );

}

export default SignIn;