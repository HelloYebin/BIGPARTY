import React from "react";
import styles from "./../styles/ScheduleCard.module.css";

function ScheduleCard({ time, events }) {
  const body = events.map((item, idx) => {
    return (
      <ul key={idx}>
        <li className={styles.event}>{item}</li>
      </ul>
    );
  });

  return (
    <div className={styles.ScheduleCardContainer}>
      <div className={styles.cardTime}>
        <h1 className={styles.timeText}>{time}</h1>
      </div>
      <div className={styles.cardBody}>{body}</div>
    </div>
  );
}

export default ScheduleCard;
