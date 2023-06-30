import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RouteNav from "../../components/routeNav";
import banner from "../../image/notice.png";
import styles from "./newsStyles/routeNotice.module.css";
import NoticeContent from "./noticeContent";
import Axios from "axios";

export default function AdminRouteNotice() {
  const [viewNotice, setViewNotice] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("/api/get").then((response) => {
      setViewNotice(response.data);
    });
  }, []);

  //공지사항 삭제
  const noticeDelete = (id) => {
    const password = 1234;
    const que = prompt("비밀번호를 입력해주세요");
    if (Number(que) === password) {
      Axios.delete(`/api/${id}`)
        .then((res) => {
          alert("글이 삭제되었습니다.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  const content = viewNotice.map((element) => {
    return (
      <div
        style={{ marginTop: "100px" }}
        key={element.id}
        className={styles.view}
      >
        <NoticeContent
          title={element.title}
          body={element.description}
          delete={true}
        />
        <button
          style={{ right: "80px", position: "absolute" }}
          onClick={(e) => {
            navigate("/write");
          }}
        >
          글 수정
        </button>
        <button
          style={{ right: "10px", position: "absolute" }}
          onClick={(e) => noticeDelete(element.id, e)}
        >
          글 삭제
        </button>
      </div>
    );
  });

  return (
    <>
      <div className={styles.noticeContainer}>
        <img src={banner} className={styles.banner} width="100%" alt="banner" />
        <RouteNav nav={"행사소식"} />
        <div className={styles.notice}>
          <h1 className={styles.title}>공지사항</h1>
          <span className={styles.writeArray}>
            <Link style={{ textDecoration: "none" }} to="/write">
              <h3 className={styles.writeBtn}>글쓰기</h3>
            </Link>
          </span>
          {content}
        </div>
      </div>
    </>
  );
}
