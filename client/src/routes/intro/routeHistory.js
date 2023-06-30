import styles from "./introStyles/routeHistory.module.css";
import RouteNav from "../../components/routeNav";
import RouteBanner from "./../RouteBanner";
import jana from "../../image/jana.jpeg";

export default function RouteHistory() {
  return (
    // 빅파티란?
    <>
      <div className={styles.historyContainer}>
        <RouteBanner />
        <RouteNav nav={"점핑빅파티"} />
        <div className={styles.history}>
          <img src={jana} className={styles.janaPic} alt="jana"></img>
          <h1>What is Big-Party?</h1>
          <h3>
            2001년 체코에서 우리가 만든 이 혁신적인 운동이 빠른 속도로 알려지게
            되면서, 많은 나라들이 드디어 제대로 만든 트램폴린과 안전한 동작을
            공유하게 되었습니다. 점핑은 단순한 즐길 거리를 넘어서, 기존의 어떤
            유산소운동보다도 폭발적이고 효율적인 최고의 피트니스 종목으로
            발전했습니다. <br />
            <br />
            <br />
            체코를 비롯해 슬로바키아, 독일, 러시아 등 많은 나라들은 오리지널
            점핑을 사랑하는 사람들이 한데 모여 축제의 장을 열었습니다. 수백 대의
            트램폴린이 모여서, 심장을 뛰게 하는 음악과 함성과 함께, 점프하고
            발을 구릅니다. 우리의 구호를 함께 하며 마음으로 하나가 됩니다.
            <br />
            우리는 이 축제를 점핑페스티벌(Jumping Festival) 혹은 빅파티(Big
            Party) 라고 부릅니다. <br />
            <br />
            <br />
          </h3>
        </div>
      </div>
    </>
  );
}
