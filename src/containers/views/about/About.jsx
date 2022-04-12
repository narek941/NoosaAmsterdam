import React from "react";
import Banner from "../../../components/common/banner";

import styles from "./About.module.scss";
import { aboutList } from "../../../utils/aboutList";

const About = () => {
  const aboutRender = aboutList.map(({ id, text, title, logo }) => (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__img}>
        <img src={logo} alt={logo} />
      </div>
      <div className={styles.wrapper__text}>
        <h3>{title} </h3>
        <p>{text}</p>
      </div>
    </div>
  ));
  return (
    <>
      <Banner />
      <section>
        <div className={styles.container}>{aboutRender}</div>
      </section>
    </>
  );
};

export default About;
