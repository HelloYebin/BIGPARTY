import React, { useEffect } from "react";
import "../styles/map.css";
const { kakao } = window;

export default function Map() {
  useEffect(() => {
    let mapContainer = document.getElementById("map");

    let mapOption = {
      center: new kakao.maps.LatLng(36.1832, 127.1089), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    let map = new kakao.maps.Map(mapContainer, mapOption);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    let mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커가 표시될 위치입니다
    let markerPosition = new kakao.maps.LatLng(36.1832, 127.1089);

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    let content =
      '<div class="customoverlay">' +
      '  <a href="https://map.kakao.com/link/map/17568742" target="_blank">' +
      '    <span class="title">건양대학교 짐나지움</span>' +
      "  </a>" +
      "</div>";

    // 커스텀 오버레이가 표시될 위치입니다
    let position = new kakao.maps.LatLng(36.1832, 127.1089);

    // 커스텀 오버레이를 생성합니다
    let customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1,
    });

    customOverlay.setMap(map);
  }, []);

  return (
    <div>
      <div>
        <div id="map"></div>
      </div>
    </div>
  );
}
