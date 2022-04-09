import React, { useState } from "react";
import { HeaderLogo, TypeLinks } from "../../index";
import IconButton from "../../../img/IconButton";
import SignPopup from "../popup/SignPop";
import BacketPopup from "../popup/BacketPop";
import { navigationList } from "../../../utils";
import styles from "./Header.module.scss";

const Header = ({ children, ...props }) => {
  const [showSignPopup, setShowSignPopup] = useState(false);
  const [showBacketPopup, setShowBacketPopup] = useState(false);

  const renderNav = navigationList.map((item) => (
    <TypeLinks key={item.id} type="navigation" to={item.name}>
      {item.name}
    </TypeLinks>
  ));
  return (
    <>
      <div className={styles.header}>
        <section>
          <div className={styles.header__container}>
            <div>
              <HeaderLogo type="header" to={"/home"} />
            </div>

            <nav>{renderNav}</nav>

            <div className={styles.header__container_userLine}>
              <div>
                <IconButton type="search" />
              </div>

              <div
                className={styles.header__container_userLine_basket}
                onClick={() => setShowBacketPopup(!showBacketPopup)}
              >
                <IconButton type="basket" />
                <span
                  className={
                    styles.header__container_userLine_basket_basketCount
                  }
                ></span>
              </div>
              <div onClick={() => setShowSignPopup(!showSignPopup)}>
                <IconButton type="user" />
              </div>
            
            </div>
            {showSignPopup ? <SignPopup /> : null}
            {showBacketPopup ? <BacketPopup /> : null}
            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
