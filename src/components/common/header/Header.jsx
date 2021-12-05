import React, { useState } from "react";
import { HeaderLogo, TypeLinks } from "../../index";
import styles from "./Header.module.css";
import IconButton from "../../../img/IconButton";
import SignPopup from "../popup/SignPop";
import BacketPopup from "../popup/BacketPop";
import { useSelector } from "react-redux";
import SearchProduct from "../searchProduct";

const Header = ({ children, ...props }) => {
  const [showSignPopup, setShowSignPopup] = useState(false);
  const [showBacketPopup, setShowBacketPopup] = useState(false);
  return (
    <>
      <div className={styles.header} position="static">
        <section>
          <div className={styles.header__container}>
          <HeaderLogo type="header" to={"/home"} />
          <nav>
          <TypeLinks type="navigation" to="/product">
            product
          </TypeLinks>
          <TypeLinks type="navigation" to="/about">
            about
          </TypeLinks>
          <TypeLinks type="navigation" to="/contact">
            contact
          </TypeLinks>
          <TypeLinks>sale</TypeLinks>
          <label className={styles.searchLine}>
             {/* <SearchProduct />  */}
            <IconButton type="search" />
            <label
              className={styles.basketLabel}
              onClick={() => setShowBacketPopup(!showBacketPopup)}
            >
              <IconButton type="basket" className={styles.basket} />
              <span className={styles.basketCount}>
                {/* {productInBasket.length} */}
              </span>
              {showBacketPopup ? <BacketPopup /> : null}
            </label>
            <label onClick={() => setShowSignPopup(!showSignPopup)}>
              <IconButton
                type="user"
              />
              {showSignPopup ? <SignPopup /> : null}
            </label>
          </label>
          {children}
          </nav>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
