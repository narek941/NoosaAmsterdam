import React from "react";
import { Grid } from "@material-ui/core";
import { HeaderLogo, TypeLinks } from "../../buttons";
import styles from "./Footer.module.css";
import IconButton from "../../../img/IconButton";

const Footer = ({ children, ...props }) => {
  return (
    <div className={styles.footerContainer}>
      <section>
        <div className={styles.footerRow}>
          <label className={styles.footerLabel}>
            <div className={styles.firstRow}>
              <span className={styles.footerLogo}>
                <HeaderLogo />
              </span>

              <span>
                NOOSA-Amsterdam are accessories made of high quality leather,
                decorated with handmade buttons.
              </span>
            </div>
          </label>
          <label className={styles.footerLabel}>
            <div>
              <ul className={styles.ulStyle}>
                <span class={styles.footerHeader}>Information</span>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/home">
                    Home
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/about">
                    About Us
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/delivery">
                    Delivery
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/payment">
                    Payment
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/contact">
                    Contacts
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/sale">
                    Sale
                  </TypeLinks>
                </li>
              </ul>
            </div>
          </label>

          <label className={styles.footerLabel}>
            <div>
              <ul className={styles.ulStyle}>
                <span class={styles.footerHeader}>Products</span>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/product">
                    Bracelets
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/product">
                    Buttons
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/product">
                    Bags
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/product">
                    Wallets
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/product">
                    Belts
                  </TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks type="navigation" to="/product">
                    Gift Card
                  </TypeLinks>
                </li>
              </ul>
            </div>
          </label>
          <label className={styles.footerLabel}>
            <div>
              <ul className={styles.ulStyle}>
                <span class={styles.footerHeader}>Contacts</span>
                <li className={styles.liStyle}>
                  <TypeLinks>                  Phone Number
319-481-1070</TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  
                  <TypeLinks>Mobile Number 712-253-2757</TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  
                  <TypeLinks>Email 7wchb77kv59@gmail.net</TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  
                  <TypeLinks>Adress2710 Pyramid Valley Road</TypeLinks>
                </li>
                <li className={styles.liStyle}>
                  <TypeLinks>Follow us on social networks</TypeLinks>
                </li>
              <li>
                <div className={styles.subscribeContent}>
                  <div className={styles.subscribe}>
                    <span className={styles.social}>
                      <IconButton type="fb" />
                    </span>
                    <span className={styles.social}>
                      <IconButton type="insta" />
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    background-color="#f2f2f2"
                    className={styles.input}
                  />
                  <button className={styles.button}>Subscribe</button>
                </div>
              </li>
            </ul>
            </div>

          </label>
        </div>
      </section>
    </div>
  );
};

export default Footer;
