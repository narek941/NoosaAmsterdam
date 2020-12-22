import React from 'react';
import NoosaButton from "../../buttons/NoosaButton";
import styles from './Banner.module.css';
const Banner = (props) => {

  return (
    <div className={styles.mainStyle} >
      <div className={styles.content}>
          <div className={styles.text}>
            Tell your story with the unique Noosa Amsterdam collection
              </div>
              <div className={styles.button}>
                  <NoosaButton >Shop Now</NoosaButton>
              </div>
      </div>
    </div>


  )
}

export default Banner;