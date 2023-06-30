import styles from "../styles/thContainer.module.css";
import { Link } from "react-router-dom";

export default function ThBox({ link, title, src }) {
  return (
    <div
      className={styles.content}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${src})`,
      }}
    >
      <div className={styles.contentInner}>
        <span className={styles.btnWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <Link to={link} className={styles.detailBtn}>
            <span>자세히 보기</span>
          </Link>
          <div className={styles.line}></div>
        </span>
      </div>
    </div>
  );
}
