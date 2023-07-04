import React from "react";
import RouteBanner from "../RouteBanner";
import RouteNav from "../../components/routeNav";
import checkIcon from "./../../image/check-icon.png";
import styles from "./applyStyles/routePaymentResult.module.css";
import thumb from "./../../image/payment_thumb.png";
import { usePaymentStore } from "../../store/paymentInfo";
import { useNavigate } from "react-router-dom";
function RoutePaymentResult() {
  const { paymentInfo } = usePaymentStore();
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const date = ("0" + today.getDate()).slice(-2);
  const navigate = useNavigate();
  return (
    <div>
      <RouteBanner />
      {paymentInfo.count !== undefined ? (
        <div>
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
                    <td>{paymentInfo.count}</td>
                    <td>{`${year}-${month}-${date}`}</td>
                    <td style={{ color: "#40b649" }}>
                      {paymentInfo.amount
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </td>
                    <td style={{ color: "#40b649" }}>{paymentInfo.mid}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.fetchFailContainer}>
          <h1>결제를 다시 진행해주세요.</h1>
          <button
            className={styles.retypeBtn}
            onClick={() => navigate("/apply")}
          >
            다시 입력
          </button>
        </div>
      )}
    </div>
  );
}

export default RoutePaymentResult;
