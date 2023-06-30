import styles from "../styles/home.module.css";
import bg from "../video/bigparty-poster.mp4";
import HomeInterval from "../components/homeInterval";
import NdContainer from "../components/ndContainer";
import ThContainer from "../components/thContainer";
import HomeFooter from "../components/homeFooter";
import HomeSponcer from "../components/homeSponcer";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const pageUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.entire}>
      <div className={styles.upLogo} onClick={pageUpClick}>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>

      <div className={styles.videoWrap}>
        <video muted autoPlay loop playsInline className={styles.bgVideo}>
          해당 확장자는 지원하지 않습니다.
          <source src={bg} type="video/mp4" />
        </video>
        <div className={styles.blackCover}></div>
      </div>

      <HomeInterval />
      <NdContainer />
      <ThContainer />
      <div className={styles.bridge}>
        <div className={styles.bridgeImg}></div>
      </div>
      <HomeSponcer />
      <HomeFooter />
    </div>
  );
}
export default Home;
