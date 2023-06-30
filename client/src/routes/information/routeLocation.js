import RouteNav from "../../components/routeNav";
import styles from "./infoStyles/routeLocation.module.css";
import RouteBanner from "./../RouteBanner";
import Map from "../../components/map";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RouteLocation() {
  return (
    <>
      <div className={styles.locationContainer}>
        <RouteBanner />
        <RouteNav nav={"행사안내"} />
        <div className={styles.location}>
          <Map />
          <h2>주소</h2>
          <span>
            <FontAwesomeIcon icon={faLocationDot} /> 32992 충청남도 논산시
            대학로 121 건양대학교 대운동장 옆
          </span>
          <br />
          <br />
          <h2>교통 안내</h2>
          <table className={styles.styled_table}>
            <thead>
              <tr>
                <th>지역</th>
                <th>오시는길</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>서울.천안</td>
                <td>
                  천안 논산간 고속도로 - 천안 T.G - 서논산 I.C - 건양대학교
                </td>
              </tr>
              <tr>
                <td>대전</td>
                <td>
                  서부터미널 - 논산행(40여분 소요) / 호남선(KTX) 서대전역 -
                  논산역 이용
                </td>
              </tr>
              <tr>
                <td>경상남·북도</td>
                <td>
                  경부고속도로 - 비룡 I.C - 남부순환고속도로 - 서대전 I.C -
                  호남고속도로 - 논산 I.C - 건양대학교
                </td>
              </tr>
              <tr>
                <td>전라남·북도</td>
                <td>호남고속도로 - 논산 I.C - 건양대</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
