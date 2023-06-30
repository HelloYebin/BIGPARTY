import React from "react";
import styles from "./../styles/InvitationCard.module.css";

function InvitationCard({ title, src }) {
  return (
    <div>
      {title === "MASTER 1" || title === "MASTER 3" ? (
        //마스터 1과 3은 사진 왼쪽배치
        <div className={styles.cardContainer}>
          <img src={src} alt={title} className={styles.cardImageLeft}></img>
          <div className={styles.cardTextContainer}>
            <h2 className={styles.cardTextTitle}>{title}</h2>
            <div className={styles.cardTextBody}>
              <div className={styles.subTitle}>
                Jumping Fitness Master Trainer
              </div>
              <div className={styles.inviteText}>공지사항 테스트</div>
            </div>
          </div>
        </div>
      ) : (
        //마스터 2과 4은 사진 왼쪽배치
        <div className={`${styles.cardContainer} ${styles.containerToTop} `}>
          <div
            className={`${styles.cardTextContainer} ${styles.textContainerToLeft}`}
          >
            <h2 className={`${styles.cardTextTitle} ${styles.titleToEnd}`}>
              {title}
            </h2>
            <div className={styles.cardTextBody}>
              <div className={`${styles.inviteToRight} ${styles.subTitle}`}>
                Jumping Fitness Master Trainer
              </div>
              <div className={`${styles.inviteToRight} ${styles.inviteText}`}>
                공지사항 테스트공지사항 테스트공지사항 테스트공지사항
                테스트공지사항 테스트공지사항 테스트공지사항 테스트공지사항
                테스트공지사항 테스트공지사항 테스트공지사항 테스트공지사항
              </div>
            </div>
          </div>
          <img src={src} alt={title} className={styles.cardImageRight}></img>
        </div>
      )}
    </div>
  );
}

export default InvitationCard;
