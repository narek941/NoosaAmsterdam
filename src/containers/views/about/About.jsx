import React from "react";

import styles from "./About.module.scss";
import { aboutList } from "../../../utils/aboutList";

const About = () => {
  const aboutRender = aboutList.map(({ id, text, title, logo }) => (
    <div className={styles.wrapper} key={id}>
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
      <div className={styles.banner}>
        <section>
          <div className={styles.banner__content}>Noosa Amsterdam </div>
        </section>
      </div>
      <section>
        <div className={styles.container}>{aboutRender}</div>
      </section>
    </>
  );
};

export default About;
