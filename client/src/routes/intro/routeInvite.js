import styles from "./introStyles/routeInvite.module.css";
import RouteNav from "../../components/routeNav";
import RouteBanner from "./../RouteBanner";
import InvitationCard from "../../components/InvitationCard";
import masterImg1 from "./../../../src/image/master1.png";
import masterImg2 from "./../../../src/image/master2.png";
import masterImg3 from "./../../../src/image/master3.png";
import masterImg4 from "./../../../src/image/master4.png";

export default function RouteInvite() {
  return (
    <>
      <div className={styles.inviteContainer}>
        <RouteBanner />
        <RouteNav nav={"점핑빅파티"} />
        <div className={styles.invite}>
          <InvitationCard title={"MASTER 1"} src={masterImg1} />
          <InvitationCard title={"MASTER 2"} src={masterImg2} />
          <InvitationCard title={"MASTER 3"} src={masterImg3} />
          <InvitationCard title={"MASTER 4"} src={masterImg4} />
        </div>
      </div>
    </>
  );
}
