import React from 'react';
import styles from './BacketPop.module.css';
import {TypeLinks,NoosaButton} from '../../buttons';

const BacketPop = (...props) => {

  return (
        <div className={styles.popup}>  
        <h3>Signggggg In</h3>
            <NoosaButton type ="popup">Sign In</NoosaButton>
            <TypeLinks>Create an account</TypeLinks>
        </div>
  )
}

export default BacketPop;