import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import techicon from "../../../assets/about/freepik_br_ce4323b2-1a4a-4bae-bd20-7c8021f3736d - Copy_Edited.png"
import cursor from "../../../assets/about/cursoricon.png"
import servicon from "../../../assets/about/servericon.png"
import uiicon from "../../../assets/about/uiicon.png"


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={techicon}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a passionate frontend developer eager to create beautiful, responsive websites. I've spent time learning HTML, CSS, JavaScript, and frameworks like React to build interactive, user-friendly interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={servicon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              While I'm still exploring backend development, I've been working with technologies like Python to create simple, optimized APIs and improve my understanding of server-side systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiicon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I love design and have worked on crafting intuitive, clean UI layouts and always strive to create designs that are both functional and visually appealing.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};