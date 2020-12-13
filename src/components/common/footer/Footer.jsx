import React from 'react';
import { Grid, TextField ,Button} from '@material-ui/core';
import { HeaderLogo, TypeLinks } from '../../buttons';
import styles from './Footer.module.css';
import IconButton from '../../../img/IconButton';

const Footer = ({ children, ...props }) => {

  return (
    <div className={styles.footerContainer}>
      <Grid className={styles.footerRow} justify="center" alignItems="center" container direction="row">
        <Grid item xs={12} md={3}>
          <div className={styles.firstRow}>
            <HeaderLogo />
          NOOSA-Amsterdam are accessories made of high quality leather, decorated with handmade buttons.
          </div>

        </Grid>
        <Grid item xs={12} md={3}>
          <div>

            <ul className={styles.ulStyle}>
              <h2>Information</h2>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/home">Home</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/about">About Us</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/delivery">Delivery</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/payment">Payment</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/contact">Contacts</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/sale">Sale</TypeLinks></li>
            </ul>

          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div >

            <ul className={styles.ulStyle}>
              <h2>Products</h2>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/product">Bracelets</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/product">Buttons</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/product">Bags</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/product">Wallets</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/product">Belts</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks type='navigation' to="/product">Gift Card</TypeLinks></li>
            </ul>

          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div >
            <ul className={styles.ulStyle}>
              <h2>Contacts</h2>
              <li className={styles.liStyle}><TypeLinks >Phone Number 319-481-1070</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks >Mobile Number 712-253-2757</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks >Email 7wchb77kv59@temporary-mail.netm</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks >Address 2710 Pyramid Valley Road</TypeLinks></li>
              <li className={styles.liStyle}><TypeLinks >Follow us on social networks</TypeLinks></li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <div className={styles.subscribeContent}>
      <div className={styles.subscribe}>
            <IconButton type="fb" />
            <IconButton type='insta' /></div>
            <input type="text" placeholder="Enter Email Address"   background-color= '#f2f2f2' className={styles.input}/>
            <button className={styles.button}>Subscribe</button>
    </div>
      </div>
      
  )
}

export default Footer;