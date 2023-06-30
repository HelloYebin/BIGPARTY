import styles from "./applyStyles/routeApply.module.css";
import reservationIcon from "../../image/reservation.png";
import confirmIcon from "../../image/confirm.png";
import RouteBanner from "./../RouteBanner";
import RouteNav from "../../components/routeNav";
import { Link } from "react-router-dom";
export default function RouteApply() {
  return (
    <div>
      <RouteBanner />
      <RouteNav nav={"참가신청"} />
      <div className={styles.apply}>
        <div className={styles.body}>
          <Link to="/apply/regular" className={styles.linkIcon}>
            <img
              src={reservationIcon}
              className={styles.icons}
              alt="reservationBtn"
            ></img>
            <button className={styles.buttons}>예약하기</button>
          </Link>
          <Link to="/apply/confirm" className={styles.linkIcon}>
            <img
              src={confirmIcon}
              width="150px"
              className={styles.icons}
              alt="reservationBtn"
            ></img>
            <button className={styles.buttons}>예매확인</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
