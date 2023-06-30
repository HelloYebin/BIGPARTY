import styles from "../styles/thContainer.module.css";
import ThBox from "./thBox";
import HomeContainersTitle from "./HomeContainersTitle";
import backgroundSchedule from "../image/thBoxScheduleImg.png";
import backgroundLoaction from "../image/thBoxLocationImg.png";
import backgroundBooth from "../image/thBoxBoothImg.png";

function ThContainer() {
  return (
    <div className={styles.thContainer}>
      <HomeContainersTitle title={"ANNOUNCEMENT"} />
      <div className={styles.thBody}>
        <ThBox
          title={"프로그램 일정"}
          link={"/info/schedule"}
          src={backgroundBooth}
        />
        <ThBox
          title={"행사장 위치"}
          link={"/info/location"}
          src={backgroundSchedule}
        />
        <ThBox
          title={"부스 안내"}
          link={"/info/booth"}
          src={backgroundLoaction}
        />
      </div>
    </div>
  );
}
export default ThContainer;
