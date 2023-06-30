import styles from "./newsStyles/noticeContent.module.css";
import { useState } from "react";
import "./newsStyles/reactquill.css";

export default function NoticeContent({ title, body }) {
  const [click, setClick] = useState(false);

  const clickHandle = () => {
    setClick(!click);
  };
  return (
    <div className={styles.contentContainer} onClick={clickHandle}>
      <h2
        className={styles.contentTitle}
        style={{ color: click ? "black" : "gray" }}
      >
        {title}
      </h2>
      <span
        className="contentBody"
        dangerouslySetInnerHTML={{ __html: click ? body : null }}
      ></span>
    </div>
  );
}
