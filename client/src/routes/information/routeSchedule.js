import ScheduleCard from "../../components/ScheduleCard";
import RouteNav from "../../components/routeNav";
import styles from "./infoStyles/routeSchedule.module.css";
import RouteBanner from "./../RouteBanner";

const event1 = ["오프닝", "마스터 소개", "트리플 클래스1"];
const event2 = ["MASTER Jana & 윤하이 대표님 대담", "A팀 공연", "B팀 공연"];
const event3 = [
  "MASTER Jakub 영상",
  "MASTER Jakub 클래스",
  "MASTER Jakub & 윤하이 대표님 대담",
  "C팀 공연",
];
const event4 = [
  "MASTER Nale 영상",
  "MASTER Nale 클래스",
  "MASTER Nale & 윤하이 대표님 대담",
  "D팀 공연",
];
const event5 = ["트리플 클래스2", "MASTER 인터뷰", "사진촬영"];

export default function RouteSchedule() {
  return (
    <>
      <div className={styles.scheduleContainer}>
        <RouteBanner />
        <RouteNav nav={"행사안내"} />
        <div className={styles.schedule}>
          <div className={styles.cardWrapper}>
            <ScheduleCard time={"13:00"} events={event1} />
            <ScheduleCard time={"14:00"} events={event2} />
            <ScheduleCard time={"15:00"} events={event3} />
            <ScheduleCard time={"16:00"} events={event4} />
            <ScheduleCard time={"17:00"} events={event5} />
          </div>
          <div className={styles.noteContainer}>
            <div className={styles.noteTitleWrapper}>
              <h2 className={styles.noteTitle}>참고사항</h2>
            </div>
            <div className={styles.description}>
              <ol>
                <li>쉬는 시간은 ~~~</li>
                <li>단체 사진 촬영은 모든 일정이 끝난 후 촬영 예정입니다.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
