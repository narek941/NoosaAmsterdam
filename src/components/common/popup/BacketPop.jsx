import React from 'react';
import styles from './BacketPop.module.css';
import {TypeLinks,NoosaButton} from '../../buttons';

const BacketPop = (...props) => {

  return (
        <div className={styles.popup}>  
        <h3>Total</h3>
            <NoosaButton type ="popup">close</NoosaButton>
            <NoosaButton type ="popup">Checkout</NoosaButton>
        </div>
  )
}

export default BacketPop;