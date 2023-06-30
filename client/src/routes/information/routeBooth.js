import RouteNav from "../../components/routeNav";
import styles from "./infoStyles/routeBooth.module.css";
import RouteBanner from "./../RouteBanner";

export default function RouteBooth() {
  return (
    <>
      <div className={styles.boothContainer}>
        <RouteBanner />
        <RouteNav nav={"행사안내"} />
        <div className={styles.booth}>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
          <h1>안녕</h1>
        </div>
      </div>
    </>
  );
}
