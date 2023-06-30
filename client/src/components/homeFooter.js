import styles from "../styles/homeFooter.module.css";
import footerLogo from "../image/footerLogo.png";
import { faGlobe, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HomeFooter() {
  return (
    <div className={styles.footerBg}>
      <div className={styles.logos}>
        <img src={footerLogo} className={styles.footerLogo} alt="logo"></img>
        <div className={styles.links}>
          <a
            href="https://www.youtube.com/c/JumpingHighKOREA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className={styles.link} />
          </a>
          <a
            href="https://www.instagram.com/jumpinghigh_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.link} />
          </a>
          <a
            href="https://blog.naver.com/jumpingkor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBlog} className={styles.link} />
          </a>
          <a
            href="https://jumping-high.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGlobe} className={styles.link} />
          </a>
        </div>
        <span className={styles.copyright}>
          JUMPINGHIGH © 2014. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default HomeFooter;
