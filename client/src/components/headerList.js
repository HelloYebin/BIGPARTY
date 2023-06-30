import { Link } from "react-router-dom";
import ToGo from "./toGo";
import styles from "../styles/header.module.css";
import { useState } from "react";

export default function Headerlist({ list, link }) {
  const [over, setOver] = useState(false);
  let content = null;
  if (list === "점핑빅파티") {
    content = (
      <ul className={styles.dep2}>
        <ToGo link="/intro/summary" nav="행사개요" />
        <ToGo link="/intro/history" nav="히스토리" />
        <ToGo link="/intro/invite" nav="초대의 글" />
      </ul>
    );
  } else if (list === "행사안내") {
    content = (
      <ul className={styles.dep2}>
        <ToGo link="/info/schedule" nav="프로그램 일정" />
        <ToGo link="/info/location" nav="행사장 위치" />
        <ToGo link="/info/booth" nav="부스 안내" />
      </ul>
    );
  } else if (list === "행사소식") {
    content = (
      <ul className={styles.dep2}>
        <ToGo link="/news/notice" nav="공지사항" />
        <ToGo link="/news/press" nav="점핑자료" />
      </ul>
    );
  }

  return (
    <li
      className={styles.lists}
      onMouseOver={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
    >
      <Link to={link} className={styles.toApply}>
        <p style={{ color: over ? "#40b649" : "white" }}>{list}</p>
      </Link>
      {content}
    </li>
  );
}
