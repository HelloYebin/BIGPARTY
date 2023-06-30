import React from "react";
import styles from "../styles/HomeContainersTitle.module.css";

const HomeContainersTitle = ({ title }) => {
  return (
    <div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default HomeContainersTitle;
