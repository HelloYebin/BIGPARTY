import { useParams } from "react-router-dom";
import styles from "./newsStyles/routePressDetail.module.css";
import "./newsStyles/reactquill.css";
import RouteBanner from "./../RouteBanner";
import { useEffect, useState } from "react";

export default function RoutePressDetail() {
  const YOUTUBE_KEY = "AIzaSyBFMif6DbfHr54LtPjd7qHOr8ohpxLZ9jQ";
  const [videoList, setVideoList] = useState([]);
  const a = useParams();
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLdxxC-Ev9W2vIRifpuNmMllvLN5CbYx-K&key=${YOUTUBE_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("400 or 500 error");
        }
        return response.json();
      })
      .then((json) => setVideoList(json.items))
      .catch(() => {
        console.log("error");
      });
  }, []);

  const num = a.id;
  const pressList = videoList.filter((video) => video.id === num);

  const content = pressList.map((video) => (
    <div key={video.id} className={styles.article}>
      <p className={styles.videoTitle}>{video.snippet.title}</p>
      <hr />
      <div className={styles.test}>
        <iframe
          className={styles.BodyVideo}
          title="youtube Frame"
          id="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
          allowFullScreen
        ></iframe>
      </div>
      {/* {press.bodyImg ? (
        <img
          width="600px"
          height="600px"
          className={styles.imgBox}
          alt="pressImg"
          src={process.env.PUBLIC_URL + press.bodyImg} //public 경로
        />
      ) : (
        ""
      )}
      <br />
      <span
        dangerouslySetInnerHTML={{ __html: press.body }}
        className={styles.body}
      ></span> */}
    </div>
  ));

  return (
    <div className={styles.routeDetailContainer}>
      <RouteBanner />
      {content}
    </div>
  );
}
