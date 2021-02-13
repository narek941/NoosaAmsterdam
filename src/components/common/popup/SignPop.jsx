import React from 'react';
import styles from './SignPop.module.css';
import {TypeLinks,NoosaButton} from '../../buttons';
const SignPop = (...props) => {

  return (
        <div className={styles.signPopup}>  
        <h3>Sign In</h3>
            <NoosaButton type="popup" width="228px" height="49px" borderRadius="0px" to= '/signIn'>Sign In</NoosaButton>
            <TypeLinks type ="navigation" to='/signUp'>Create an account</TypeLinks>
        </div>
  )
}

export default SignPop;