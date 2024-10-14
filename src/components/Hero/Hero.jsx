import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aniket</h1>
        <p className={styles.description}>
          I am Aniket Gavit, a computer engineer skilled in Java, HTML, CSS, JavaScript and SQL. With a passion for web development, I have worked on various projects, applying my technical expertise to create dynamic and efficient solutions.
        </p>
        <a href="mailto:abgavit7@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
