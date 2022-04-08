import React from "react";
import { HeaderLogo, TypeLinks } from "../../buttons";
import styles from "./Footer.module.scss";
import IconButton from "../../../img/IconButton";
import { informationList, contactList, productList } from "../../../utils";

const Footer = ({ children, ...props }) => {
  const render = (data) => {
    return data.map((item) => (
      <li className={styles.liStyle} key={item.id}>
        <TypeLinks type={item.type} to={item.name}>
          {item.text}
        </TypeLinks>
      </li>
    ));
  };
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
            <ul className={styles.ulStyle}>{render(informationList)}</ul>
          </div>

          <div>
            <h3 className={styles.footerHeader}>Products</h3>
            <ul className={styles.ulStyle}>{render(productList)}</ul>
          </div>
          <div>
            <h3 className={styles.footerHeader}>Contacts</h3>
            <ul className={styles.ulStyle}>{render(contactList)}</ul>

            <div className={styles.subscribeContent}>
              <div className={styles.subscribe}>
                <span className={styles.social}>
                  <IconButton type="fb" />
                </span>
                <span className={styles.social}>
                  <IconButton type="insta" />
                </span>
              </div>
              <form className={styles.subscribe__input}>
                <input type="text" placeholder="Enter Email Address" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
