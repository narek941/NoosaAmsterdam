import React from "react";
import Banner from "../../../components/common/banner";
import About1 from "../../../img/about1.png";
import About2 from "../../../img/about2.png";
import About3 from "../../../img/about3.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Banner />
      <section>
        <div className={styles.aboutContainer}>
          <label className={styles.aboutContent}>
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
          </label>
          </div>
      </section>
    </>
  );
};

export default About;
