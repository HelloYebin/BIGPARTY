import styles from "../styles/homeSponcer.module.css";
import jumpingKorea from "../image/logo-jumpinghigh.png";
import aerower from "../image/logo-aerower.png";
import highjump from "../image/logo-highjump.png";
import kjfa from "../image/logo-KJFA.png";
import original from "../image/logo-ORIGINAL.png";
import KY from "../image/logo-KY.png";
import soon from "../image/COMING-SOON.png";
import HomeContainersTitle from "./HomeContainersTitle";

function HomeSponcer() {
  return (
    <div className={styles.sponcerContainer}>
      <HomeContainersTitle title={"PARTNER"} />
      <div className={styles.sponcersWrapper}>
        <ul className={styles.sponcers}>
          <li>
            <img src={jumpingKorea} alt="jumpingKor"></img>
          </li>
          <li>
            <img src={aerower} alt="aerower"></img>
          </li>
          <li>
            <img src={highjump} alt="highjump"></img>
          </li>
          <li>
            <img src={original} alt="original"></img>
          </li>
          <li>
            <img src={kjfa} alt="kjfa"></img>
          </li>
          <li>
            <img src={KY} alt="COMING-SOON"></img>
          </li>
          <li className={styles.bottomLine}>
            <img src={soon} alt="COMING-SOON"></img>
          </li>
          <li className={styles.bottomLine}>
            <img src={soon} alt="COMING-SOON"></img>
          </li>
          <li className={styles.bottomLine}>
            <img src={soon} alt="COMING-SOON"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeSponcer;
