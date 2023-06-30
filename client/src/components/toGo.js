import { Link } from "react-router-dom";
import styles from "../styles/toGo.module.css";

export default function ToGo({ link, nav }) {
  return (
    <>
      <li>
        <Link className={styles.toGo} to={link}>
          {nav}
        </Link>
      </li>
    </>
  );
}
