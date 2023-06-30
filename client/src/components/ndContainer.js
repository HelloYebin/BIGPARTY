import styles from "../styles/ndContainer.module.css";
import inviteImg from "../image/jumping_lettering.png";
// import HomeContainersTitle from "./HomeContainersTitle";

function NdContainer() {
  return (
    <div className={styles.ndContainer}>
      {/* <div>
        <HomeContainersTitle title={"BIGPARTY"} />
      </div> */}
      <div className={styles.inviteContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.imageWapper}>
            <img src={inviteImg} alt="inviveImg" className={styles.inviteImg} />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <span className={styles.inviteTitle}>Welcome to Bigparty</span>
          <br />
          <span className={styles.invite}>
            이제 빅파티는 더이상 그 나라만의 축제가 아닙니다. <br />
            SNS 와 공식사이트를 통해서 세계 각국의 빅파티를 구경하고 함께
            합니다.
            <br /> 이 행사로 우리는 이 운동의 고유함을 확인하고 한 가족으로서의
            동질감을 느낍니다. <br />
            대한민국의 빅파티를 전세계의 점퍼들이 기다리고 있습니다. <br />
            이제 여러분들이 오리지널의 중심이 한국이라는 사실을 보여줄
            차례입니다. <br />
            <br />
            <br />
            우리와 함께 하시겠습니까?
          </span>
        </div>
      </div>
    </div>
  );
}
export default NdContainer;
