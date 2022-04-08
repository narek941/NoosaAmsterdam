import React from "react";
import { HeaderLogo, TypeLinks } from "../../buttons";
import styles from "./Footer.module.css";
import IconButton from "../../../img/IconButton";

const Footer = ({ children, ...props }) => {
  return (
    <div className={styles.footerContainer}>
      <section>
        <div className={styles.footerRows}>
          <div>
            <div className={styles.footerLogo}>
              <HeaderLogo />
            </div>

            <p className={styles.footerText}>
              NOOSA-Amsterdam are accessories made of high quality leather,
              decorated with handmade buttons.
            </p>
          </div>
          <div>
            <h3 className={styles.footerHeader}>Information</h3>
            <ul className={styles.ulStyle}>
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

          <div>
            <h3 className={styles.footerHeader}>Products</h3>
            <ul className={styles.ulStyle}>
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
          <div>
            <h3 className={styles.footerHeader}>Contacts</h3>
            <ul className={styles.ulStyle}>
              <li className={styles.liStyle}>
                <TypeLinks> Phone Number 319-481-1070</TypeLinks>
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
            </ul>
          </div>
        </div>
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
      </section>
    </div>
  );
};

export default Footer;
