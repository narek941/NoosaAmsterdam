import React from 'react';
import styles from './BacketPop.module.css';
import {TypeLinks,NoosaButton} from '../../buttons';

const BacketPop = (...props) => {

  return (
        <div className={styles.backetPopup}>  
        <h3>Total</h3>
            <NoosaButton type="popup" width="78px" height="26px" borderRadius="4px" to="/basket">close</NoosaButton>
            <NoosaButton type="popup" width="78px" height="26px" borderRadius="4px" to="/order">Checkout</NoosaButton>
        </div>
  )
}

export default BacketPop;