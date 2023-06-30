import styles from "./introStyles/routeSummary.module.css";
import RouteNav from "../../components/routeNav";
import RouteBanner from "../RouteBanner";
import summaryPic from "../../image/summary-poster.png";

export default function RouteSummary() {
  return (
    <>
      <div className={styles.summaryContainer}>
        <RouteBanner />
        <RouteNav nav={"점핑빅파티"} />
        <div className={styles.summary}>
          <img
            className={styles.bodyImage}
            src={summaryPic}
            alt="summaryPoster"
          ></img>
        </div>
      </div>
    </>
  );
}
