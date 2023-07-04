import React from "react";
import { usePaymentStore } from "./../../store/paymentInfo";
import RouteBanner from "../RouteBanner";
import styles from "./applyStyles/routeConfirm.module.css";
import { useNavigate } from "react-router-dom";

function RouteConfirm() {
  const { paymentHistories } = usePaymentStore();
  const navigate = useNavigate();

  //   const paymentHistories = [
  //     {
  //       buyer_name: "예빈",
  //       size_xsmall: 0,
  //       size_small: 1,
  //       size_medium: 0,
  //       size_large: 1,
  //       size_xlarge: 0,
  //       size_2xlarge: 0,
  //       buyer_headcount: 2,
  //       mid: "mid_123123124",
  //       amount: 100000,
  //     },
  //   ];
  return (
    <div>
      <RouteBanner />
      {paymentHistories.length !== 0 ? (
        <div className={styles.confirmContainer}>
          <h1>{paymentHistories[0].buyer_name}님 결제 내역</h1>
          <h2>결제 상품 정보</h2>
          <table>
            <thead>
              <tr>
                <th>상품명</th>
                <th style={{ minWidth: "30px" }}>수량</th>
                <th style={{ minWidth: "60px" }}>결제날짜</th>
                <th>상품금액</th>
                <th>결제번호</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistories.map((item) => (
                <tr key={item.mid}>
                  <td>
                    점핑하이 4회 빅파티
                    <br />
                    JUMPING BIGPARTY
                    <br />
                    {Number(item.size_xsmall) !== 0
                      ? `XS : ${item.size_xsmall} `
                      : null}
                    {Number(item.size_small) !== 0
                      ? `S : ${item.size_small} `
                      : null}
                    {Number(item.size_medium) !== 0
                      ? `M : ${item.size_medium} `
                      : null}
                    {Number(item.size_large) !== 0
                      ? `L : ${item.size_large} `
                      : null}
                    {Number(item.size_xlarge) !== 0
                      ? `XL : ${item.size_xlarge} `
                      : null}
                    {Number(item.size_2xlarge) !== 0
                      ? `2XL : ${item.size_2xlarge} `
                      : null}
                  </td>
                  <td>{item.buyer_headcount}</td>
                  <td>{item.regdate.substring(0, 10)}</td>
                  <td style={{ color: "#40b649" }}>
                    {item.amount
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </td>
                  <td style={{ color: "#40b649" }}>{item.mid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.fetchFailContainer}>
          <h1>다시 정보를 입력해주세요.</h1>
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

export default RouteConfirm;
