import React from 'react';
import styles from './SignPop.module.css';
import {TypeLinks,NoosaButton} from '../../buttons';
const SignPop = (...props) => {

  return (
        <div className={styles.popup}>  
        <h3>Sign In</h3>
            <NoosaButton type ="popup" to= '/signIn'>Sign In</NoosaButton>
            <TypeLinks type ="navigation" to='/signUp'>Create an account</TypeLinks>
        </div>
  )
}

export default SignPop;