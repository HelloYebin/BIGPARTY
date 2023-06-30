import styles from "../styles/componentFooter.module.css";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const locationNow = useLocation();

  //home 페이지 footer 안보이게
  if (locationNow.pathname === "/") {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <span className={styles.copyRight}>
          JUMPINGHIGH © 2014. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
