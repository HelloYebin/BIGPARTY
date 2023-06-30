import styles from "../styles/routeNav.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function RouteNav({ nav }) {
  const location = useLocation();

  const summaryList = [
    { id: 1, link: "/intro/summary", body: "행사개요" },
    { id: 2, link: "/intro/history", body: "히스토리" },
    { id: 3, link: "/intro/invite", body: "초대의 글" },
  ];

  const infoList = [
    { id: 1, link: "/info/schedule", body: "프로그램 일정" },
    { id: 2, link: "/info/location", body: "행사장 위치" },
    { id: 3, link: "/info/booth", body: "부스 안내" },
  ];

  const newsList = [
    { id: 1, link: "/news/notice", body: "공지사항" },
    { id: 2, link: "/news/press", body: "점핑자료" },
  ];

  const applyList = [{ id: 1, link: "/apply", body: "참가신청" }];

  const applyResult = [{ id: 1, link: "/apply/result", body: "결제완료" }];

  const lis = [];
  if (nav === "점핑빅파티") {
    for (let i = 0; i < summaryList.length; i++) {
      let t = summaryList[i];
      lis.push(
        <Link
          key={t.id}
          to={`${t.link}`}
          className={styles.lists}
          style={{
            color: location.pathname === t.link ? "#40B649" : "black",
            borderTop:
              location.pathname === t.link
                ? "4px solid #40B649"
                : "4px solid white",
          }}
        >
          <span>{`${t.body}`}</span>
        </Link>
      );
    }
  } else if (nav === "행사안내") {
    for (let i = 0; i < infoList.length; i++) {
      let t = infoList[i];
      lis.push(
        <Link
          key={t.id}
          to={`${t.link}`}
          className={styles.lists}
          style={{
            color: location.pathname === t.link ? "#40B649" : "black",
            borderTop:
              location.pathname === t.link
                ? "4px solid #40B649"
                : "4px solid white",
          }}
        >
          <span>{`${t.body}`}</span>
        </Link>
      );
    }
  } else if (nav === "행사소식") {
    for (let i = 0; i < newsList.length; i++) {
      let t = newsList[i];
      lis.push(
        <Link
          key={t.id}
          to={`${t.link}`}
          className={styles.lists}
          style={{
            color: location.pathname === t.link ? "#40B649" : "black",
            borderTop:
              location.pathname === t.link
                ? "4px solid #40B649"
                : "4px solid white",
          }}
        >
          <span>{`${t.body}`}</span>
        </Link>
      );
    }
  } else if (nav === "참가신청") {
    for (let i = 0; i < applyList.length; i++) {
      let t = applyList[i];
      lis.push(
        <Link
          key={t.id}
          to={`${t.link}`}
          className={styles.lists}
          style={{
            color:
              location.pathname === t.link || "/apply/regular"
                ? "#40B649"
                : "black",
            borderTop:
              location.pathname === t.link || "/apply/regular"
                ? "4px solid #40B649"
                : "4px solid white",
          }}
        >
          <span>{`${t.body}`}</span>
        </Link>
      );
    }
  } else if (nav === "결제완료") {
    for (let i = 0; i < applyResult.length; i++) {
      let t = applyResult[i];
      lis.push(
        <Link
          key={t.id}
          to={`${t.link}`}
          className={styles.lists}
          style={{
            color: location.pathname === t.link ? "#40B649" : "black",
            borderTop:
              location.pathname === t.link
                ? "4px solid #40B649"
                : "4px solid white",
          }}
        >
          <span>{`${t.body}`}</span>
        </Link>
      );
    }
  }

  return (
    <nav className={styles.routeNavContainer}>
      <ul className={styles.routeList}>{lis}</ul>
    </nav>
  );
}
