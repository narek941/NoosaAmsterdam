import React from "react";
import { TypeLinks } from "../../buttons";
import styles from "./Footer.module.scss";
import IconButton from "../../../img/IconButton";
import { informationList, contactList, productList } from "../../../utils";
import noosaLogo from "../../../img/noosaLogo.png";

const Footer = ({ children, ...props }) => {
  const render = (data) => {
    return data.map((item) => (
      <li className={styles.footer__ul__li} key={item.id}>
        <TypeLinks type={item.type} to={item.name}>
          {item.text}
        </TypeLinks>
      </li>
    ));
  };
  return (
    <div className={styles.footer}>
      <section>
        <div className={styles.footer__rows}>
          <div className={styles.footer__rows__item}>
            <TypeLinks
              to={"/home"}
              className={styles.footer__rows__logo}
              children={<img src={noosaLogo} alt="logo" />}
            />

            <p className={styles.footer__rows__text}>
              NOOSA-Amsterdam are accessories made of high quality leather,
              decorated with handmade buttons.
            </p>
          </div>
          <div  className={styles.footer__rows__item}>
            <h3 className={styles.footer__header}>Information</h3>
            <ul className={styles.footer__ul}>{render(informationList)}</ul>
          </div>

          <div  className={styles.footer__rows__item}>
            <h3 className={styles.footer__header}>Products</h3>
            <ul className={styles.footer__ul}>{render(productList)}</ul>
          </div>
          <div  className={styles.footer__rows__item}>
            <h3 className={styles.footer__header}>Contacts</h3>
            <ul className={styles.footer__ul}>{render(contactList)}</ul>

            <div className={styles.footer__subscribe__wrapper}>
              <div className={styles.footer__subscribe}>
                <span className={styles.footer__subscribe__social}>
                  <IconButton type="fb" />
                </span>
                <span className={styles.footer__subscribe__social}>
                  <IconButton type="insta" />
                </span>
              </div>
              <form className={styles.footer__form}>
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
