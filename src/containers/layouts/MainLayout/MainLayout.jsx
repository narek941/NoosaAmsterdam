import React from 'react';
import {Header,Footer} from '../../../components';
import styles from "./MainLayout.module.css"

const MainLayout = ({children, ...props}) => {
  return(
    <>
      <Header />
      <div className={styles.MainLayout__Container}>
        
          {children}
        
      </div>
      <Footer />
    </>
  )
};

export default MainLayout