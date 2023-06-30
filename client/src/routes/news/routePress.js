import RouteNav from "../../components/routeNav";
import styles from "./newsStyles/routePress.module.css";
import { Link } from "react-router-dom";
import RouteBanner from "./../RouteBanner";
import { useEffect } from "react";
import { useState } from "react";

export default function RoutePress() {
  const YOUTUBE_KEY = "AIzaSyBFMif6DbfHr54LtPjd7qHOr8ohpxLZ9jQ";
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLdxxC-Ev9W2vIRifpuNmMllvLN5CbYx-K&key=${YOUTUBE_KEY}`
      )
        .then((response) => response.json())
        .then((json) => setVideoList(json.items));
    };
    fetchData();
  }, []);

  let content =
    videoList &&
    videoList.map((video) => (
      <Link
        key={video.id}
        className={styles.articleTitle}
        to={`/news/press/${video.id}`}
      >
        <div className={styles.pressContent}>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src={video.snippet.thumbnails.standard.url} //public 경로
              alt="pressImage"
            />
          </div>
        </div>
        <p className={styles.contentBody}>{video.snippet.title}</p>
      </Link>
    ));

  // const content = db.presses.map((press) => (
  //   <Link
  //     to={`/news/press/${press.id}`}
  //     key={press.id}
  //     className={styles.articleTitle}
  //   >
  //     <div className={styles.pressContent}>
  //       <div className={styles.imgContainer}>
  // <img
  //   className={styles.img}
  //   src={process.env.PUBLIC_URL + press.thumbnail} //public 경로
  //   alt="pressImage"
  // />
  //       </div>
  //     </div>
  //     <p className={styles.contentBody}>{press.title}</p>
  //   </Link>
  // ));

  return (
    <>
      <div className={styles.pressContainer}>
        <RouteBanner />
        <RouteNav nav={"행사소식"} />
        <div className={styles.press}>
          {/* <h1 className={styles.title}>점핑자료</h1> */}
          <div className={styles.body}>{content}</div>
        </div>
      </div>
    </>
  );
}
