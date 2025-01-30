import React from "react";

import styles from "./contact.module.css";
import { getImageUrl } from "../../utils";
import emailIcn from '../../../assets/contact/emailIcon.png'
import linked from '../../../assets/contact/linkedinIcon.png'
import giticn from '../../../assets/contact/githubIcon.png'


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcn} alt="Email icon" />
          <a href="mailto:kartikshetty888@gmail.com">kartikshetty888@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linked}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={giticn} alt="Github icon" />
          <a href="https://www.github.com/kartikshetty007">github</a>
        </li>
      </ul>
    </footer>
  );
};
