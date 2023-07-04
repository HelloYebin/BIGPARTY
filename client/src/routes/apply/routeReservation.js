import RouteNav from "../../components/routeNav";
import RouteBanner from "../RouteBanner";
import styles from "./applyStyles/routeReservation.module.css";
import thumb from "./../../image/payment_thumb.png";
import paymentInfo from "./../../image/payment_info.png";
import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import Select from "react-select";
import { sizeOptions } from "../../data/paymentData";
import { useNavigate } from "react-router-dom";
import { usePaymentStore } from "../../store/paymentInfo";

export default function RouteReservation() {
  const { addPaymentInfo } = usePaymentStore();

  const [buyerName, setBuyerName] = useState("");
  const [buyerTel, setBuyerTel] = useState("");
  const [buyerHeadCount, setBuyerHeadCount] = useState(1);
  const [sizeXS, setSizeXS] = useState(0);
  const [sizeS, setSizeS] = useState(0);
  const [sizeM, setSizeM] = useState(0);
  const [sizeL, setSizeL] = useState(0);
  const [sizeXL, setSizeXL] = useState(0);
  const [size2XL, setSize2XL] = useState(0);
  const [amount, setAmount] = useState(50000);

  const headCountArea = useRef();

  //인원수에 양수만 입력되도록
  useEffect(() => {
    headCountArea.current.onkeydown = function (e) {
      if (
        !(
          (e.keyCode > 95 && e.keyCode < 106) ||
          (e.keyCode > 47 && e.keyCode < 58) ||
          e.keyCode === 8
        )
      ) {
        return false;
      }
    };
  }, []);

  const amuntWithComma = amount
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const { IMP } = window;
    const product = "BIG PARTY 일반권";
    IMP.init("imp57350570");
    const mid = `mid_${new Date().getTime()}`;

    event.preventDefault();
    if (
      Number(buyerHeadCount) > 0 &&
      Number(sizeXS + sizeS + sizeM + sizeL + sizeXL + size2XL) ===
        Number(buyerHeadCount)
    ) {
      //포트원에 결제 정보 보내기
      IMP.request_pay(
        {
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: mid,
          name: product,
          amount: 100,
          // buyer_email: "Iamport@chai.finance",
          buyer_name: buyerName,
          buyer_tel: buyerTel,
          // buyer_addr: "서울특별시 강남구 삼성동",
          // buyer_postcode: "123-456",
        },
        function (rsp) {
          if (rsp.success) {
            // 데이터베이스에 결제정보 저장하기
            Axios.post("/payment/insert", {
              product: product,
              mid: mid,
              buyerName: buyerName,
              buyerTel: buyerTel,
              buyerHeadCount: buyerHeadCount,
              sizeXS: sizeXS,
              sizeS: sizeS,
              sizeM: sizeM,
              sizeL: sizeL,
              sizeXL: sizeXL,
              size2XL: size2XL,
              amount: amount,
            }).then(() => {
              addPaymentInfo(buyerHeadCount, amount, mid);
              alert("입장권 구매하셨습니다.");
              navigate("/apply/result");
            });
          } else {
            alert("결제를 다시 시도하시기 바랍니다.");
          }
          //rsp.imp_uid 값으로 결제 단건조회 API를 호출하여 결제결과를 판단합니다.
        }
      );
    } else {
      alert("인원수와 동일하게 사이즈를 주문해주세요.");
    }
  };

  return (
    <div>
      <RouteBanner />
      <RouteNav nav={"참가신청"} />
      <div className={styles.reservation}>
        <div className={styles.reservationTop}>
          <img src={thumb} alt="thumb" className={styles.thumb} />
          <form className={styles.inputArea} onSubmit={handleSubmit}>
            <h2>점핑하이 4회 빅파티 JUMPING BIGPARTY</h2>
            <div className={styles.dateAmount}>
              <h2>2023년 10월 14일(토)</h2>
              <h2 style={{ color: "#40B649" }}>50,000원</h2>
            </div>
            <h2>이름</h2>
            <input
              type="text"
              placeholder="필수입력"
              required
              onChange={(e) => setBuyerName(e.target.value)}
            />
            <h2>전화번호</h2>
            <input
              type="text"
              placeholder="필수입력"
              required
              onChange={(e) => setBuyerTel(e.target.value)}
              maxLength={11}
            />
            <h2>인원수</h2>
            <input
              type="number"
              placeholder="필수입력"
              min={0}
              ref={headCountArea}
              onChange={(e) => {
                setBuyerHeadCount(e.target.value);
                setAmount(50000 * e.target.value);
              }}
            />
            <h4 style={{ color: "red" }}>
              ※인원수와 동일하게 사이즈를 주문해주세요.
            </h4>
            <h2>XS</h2>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              defaultValue={sizeOptions[0]}
              options={sizeOptions}
              name="sizeXS"
              onChange={(e) => setSizeXS(e.value)}
            />

            <h2>S</h2>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              defaultValue={sizeOptions[0]}
              options={sizeOptions}
              name="sizeS"
              onChange={(e) => setSizeS(e.value)}
            />

            <h2>M</h2>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              defaultValue={sizeOptions[0]}
              options={sizeOptions}
              name="sizeM"
              onChange={(e) => setSizeM(e.value)}
            />

            <h2>L</h2>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              defaultValue={sizeOptions[0]}
              options={sizeOptions}
              name="sizeL"
              onChange={(e) => setSizeL(e.value)}
            />

            <h2>XL</h2>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              defaultValue={sizeOptions[0]}
              options={sizeOptions}
              name="sizeXL"
              onChange={(e) => setSizeXL(e.value)}
            />

            <h2>2XL</h2>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              defaultValue={sizeOptions[0]}
              options={sizeOptions}
              name="size2XL"
              onChange={(e) => setSize2XL(e.value)}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>총 상품금액</h3>
              <h3 style={{ color: "#40B649" }}>{amuntWithComma}원</h3>
            </div>
            <button className={styles.reservationBtn}>신청하기</button>
          </form>
        </div>
        <div className={styles.reservationBottom}>
          <img
            src={paymentInfo}
            alt="payment-info"
            className={styles.explainPoster}
          />
        </div>
      </div>
    </div>
  );
}
