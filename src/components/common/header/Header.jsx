import React, { useState } from "react";
import { HeaderLogo, TypeLinks } from "../../index";
import styles from "./Header.module.css";
import IconButton from "../../../img/IconButton";
import SignPopup from "../popup/SignPop";
import BacketPopup from "../popup/BacketPop";
import { useSelector, useDispatch } from "react-redux";
import SearchProduct from "../searchProduct";

const Header = ({ children, ...props }) => {
  const [showSignPopup, setShowSignPopup] = useState(false);
  const [showBacketPopup, setShowBacketPopup] = useState(false);
  const productInBasket = useSelector((state) => state.Backet.productInBasket);
  return (
    <>
      <div className={styles.header} position="static">
        <section>
          <HeaderLogo type="header" to={"/home"} />
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
            <SearchProduct />
            <IconButton type="search" />
            <IconButton
              type="basket"
              onClick={() => setShowBacketPopup(!showBacketPopup)}
              className={styles.basket}
            />
            <span className={styles.basketcount}>{productInBasket.length}</span>
            <IconButton
              type="user"
              onClick={() => setShowSignPopup(!showSignPopup)}
            />
          </label>

          {children}
        </section>
      </div>
      {showBacketPopup ? <BacketPopup /> : null}
      {showSignPopup ? <SignPopup /> : null}
    </>
  );
};

export default Header;
