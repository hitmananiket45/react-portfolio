import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Developer</h3>
              <p>
              I am Aniket Gavit, a software developer skilled in Java, HTML, CSS, JavaScript and SQL. With experience in web development and tools like Visual Studio Code and GitHub, I excel at quick learning, team collaboration, and adaptability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
              I hold a Bachelor's in Computer Engineering from SITRC Nashik (2024) with a CGPA of 7.66. My prior education includes 85.40% in SSC and 74.00% in HSC from S.A. Mission institutions in Nandurbar.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
