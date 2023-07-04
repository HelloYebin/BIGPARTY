import styles from "./applyStyles/routeApply.module.css";
import reservationIcon from "../../image/reservation.png";
import confirmIcon from "../../image/confirm.png";
import RouteBanner from "./../RouteBanner";
import RouteNav from "../../components/routeNav";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { usePaymentStore } from "./../../store/paymentInfo";

export default function RouteApply() {
  const { getHistories } = usePaymentStore();

  const [showConfirm, setShowConfirm] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerTel, setBuyerTel] = useState("");

  const navigate = useNavigate();

  const handleCheck = (event) => {
    event.preventDefault();
    axios
      .post("/payment/get", {
        buyerName: buyerName,
        buyerTel: buyerTel,
      })
      .then((response) => {
        getHistories(response.data);
        if (response.data.length === 0) {
          alert("정확한 정보를 입력해주세요.");
        } else {
          navigate("/apply/confirm");
        }
      });
  };

  return (
    <div>
      <RouteBanner />
      <RouteNav nav={"참가신청"} />
      <div className={styles.apply}>
        <div className={styles.body}>
          <Link to="/apply/regular" className={styles.linkIcon}>
            <img
              src={reservationIcon}
              className={styles.icons}
              alt="reservationBtn"
            ></img>
            <button className={styles.buttons}>예약하기</button>
          </Link>
          <div className={styles.linkIcon} onClick={() => setShowConfirm(true)}>
            <img
              src={confirmIcon}
              width="150px"
              className={styles.icons}
              alt="reservationBtn"
            ></img>
            <button className={styles.buttons}>예매확인</button>
          </div>
        </div>
      </div>
      <div
        className={styles.confirmContainer}
        style={{ display: showConfirm ? "block" : "none" }}
      >
        <form className={styles.confirm} onSubmit={handleCheck}>
          <h2>예매 조회</h2>
          <FontAwesomeIcon
            className={styles.faX}
            icon={faX}
            onClick={() => {
              setShowConfirm(false);
              setBuyerName("");
              setBuyerTel("");
            }}
          />
          <h3>이름과 전화번호로 예매 조회가 가능합니다.</h3>
          <input
            type="text"
            placeholder="이름"
            onChange={(e) => setBuyerName(e.target.value)}
            value={buyerName}
          />
          <input
            type="tel"
            placeholder="전화번호"
            maxLength={11}
            onChange={(e) => setBuyerTel(e.target.value)}
            value={buyerTel}
          />
          <button className={styles.checkBtn}>조회하기</button>
        </form>
      </div>
    </div>
  );
}
