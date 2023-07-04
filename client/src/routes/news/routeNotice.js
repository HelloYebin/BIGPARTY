import RouteNav from "../../components/routeNav";
import styles from "./newsStyles/routeNotice.module.css";
import NoticeContent from "./noticeContent";
import { useEffect, useState } from "react";
import Axios from "axios";
import RouteBanner from "./../RouteBanner";

export default function RouteNotice() {
  const [viewNotice, setViewNotice] = useState([]);

  useEffect(() => {
    Axios.get("/api/get").then((response) => {
      setViewNotice(response.data);
    });
  }, []);

  const content = viewNotice.map((element) => {
    return (
      <NoticeContent
        key={element.id}
        title={element.title}
        body={element.description}
      />
    );
  });

  return (
    <>
      <div className={styles.noticeContainer}>
        <RouteBanner />
        <RouteNav nav={"행사소식"} />
        <div className={styles.notice}>
          {/* <h1 className={styles.title}>공지사항</h1> */}
          {content}
        </div>
      </div>
    </>
  );
}
