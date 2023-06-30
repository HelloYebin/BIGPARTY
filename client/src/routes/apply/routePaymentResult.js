import React from "react";
import RouteBanner from "../RouteBanner";
import RouteNav from "../../components/routeNav";
import checkIcon from "./../../image/check-icon.png";
import styles from "./applyStyles/routePaymentResult.module.css";
import thumb from "./../../image/payment_thumb.png";
function RoutePaymentResult() {
  return (
    <div>
      <RouteBanner />
      <RouteNav nav={"결제완료"} />
      <div className={styles.result}>
        <div className={styles.resultText}>
          <img src={checkIcon} className={styles.checkIcon} alt="check" />
          <h1>
            <span style={{ color: "#40B649" }}>결제</span>가 완료되었습니다.
          </h1>
          <h2>티켓 환불은 성함과 전화번호 입력 후</h2>
          <h2>환불 가능합니다.</h2>
        </div>
        <div className={styles.resultTable}>
          <h2>결제 상품 정보</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>상품명</th>
                <th style={{ minWidth: "30px" }}>수량</th>
                <th style={{ minWidth: "60px" }}>결제날짜</th>
                <th>상품금액</th>
                <th>결제번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={thumb} alt="thumb" className={styles.thumb} />
                </td>
                <td>
                  점핑하이 4회 빅파티
                  <br />
                  JUMPING BIGPARTY
                </td>
                <td>3</td>
                <td>2023-06-30</td>
                <td style={{ color: "#40b649" }}>150,000원</td>
                <td style={{ color: "#40b649" }}>123456789</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RoutePaymentResult;
