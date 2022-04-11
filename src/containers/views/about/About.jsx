import React from "react";
import Banner from "../../../components/common/banner";

import styles from "./About.module.scss";
import {aboutList} from '../../../utils/aboutList'

const About = () => {
  const aboutRender = aboutList.map(({id,text,title,logo})=>(
    <div className={styles.wrapper}>
      <div className={styles.wrapper__img}>
      <img src={logo} alt={logo} />
      </div>
      <div className={styles.wrapper__text}>
        <h3>{title} </h3>
        <p>{text}</p>
        </div>
    </div>
  ))
  return (
    <>
      <Banner />
      <section>
        <div className={styles.container}>
          {aboutRender}
          {/* <label className={styles.aboutContent}>
            <div className={styles.textInfo}>
              <span className={styles.textTitle}>Our Story</span>
              <div className={styles.text}>
                NOOSA-Amsterdam was founded in 2009 by two Dutch designers,
                Alette Zeilstra and Natalie Magnus.The name NOOSA itself
                appeared thanks to the town of the same name in Australia, which
                deeplyimpressed both girls with its atmosphere and authenticity.
                Together, they created a line of combinable accessories to
                convey to others the magic of world artifacts, cultures and
                legends.
              </div>
            </div>
            <div className={styles.img}>
              <img src={About1} alt="Logo" />
            </div>
          </label>

          <label className={styles.aboutContent}>
            <div className={styles.img2}>
              <img src={About2} alt="Logo" />
            </div>
            <div className={styles.textInfo2}>
              <span className={styles.textTitle}>Our Products</span>
              <div className={styles.text}>
                NOOSA-Amsterdam - bracelets, belts, wallets, bags, sandals,
                which are equipped with a convenient rivet system. You create
                your own unique style using a collection of buttons: they can be
                easily changed, added, combined. Each button reflects a specific
                culture, carries a unique meaning, and you can mix and match as
                you like.
              </div>
            </div>
          </label>
          <label className={styles.aboutContent}>
            <div className={styles.img}>
              <img src={About3} alt="Logo" />
            </div>
            <div className={styles.textInfo}>
              <span className={styles.textTitle}>Our Socials</span>
              <div className={styles.text}>
                NOOSA-Amsterdam - bracelets, belts, wallets, bags, sandals,
                which are equipped with a convenient rivet system. You create
                your own unique style using a collection of buttons: they can be
                easily changed, added, combined. Each button reflects a specific
                culture, carries a unique meaning, and you can mix and match as
                you like.
              </div>
            </div>
          </label> */}
          </div>
      </section>
    </>
  );
};

export default About;
