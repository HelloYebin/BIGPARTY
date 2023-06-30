const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const PORT = process.env.port || 8001;
const path = require("path");

const db = mysql.createConnection({
  host: "nodejs-014.cafe24.com",
  user: "bigparty7",
  password: "Wjavld0220^^",
  database: "bigparty7",
  port: "3306",
});

//데이터베이스 연결
db.connect();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//공지사항 db 삭제하기
app.delete("/api/:id", function (req, res) {
  const id = req.params.id;
  const sqlQuery = "DELETE FROM notice WHERE id = ?";
  db.query(sqlQuery, [id], (err, result) => {
    res.send("삭제가 완료되었습니다.");
  });
});

//공지사항 db 가져오기
app.get("/api/get", (req, res) => {
  const sqlQuery = "SELECT * FROM notice ORDER BY id DESC";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 공지사항 TABLE에 글 저장
app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const sqlQuery = "INSERT INTO notice (title, description) VALUES (?,?)";
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send("success!");
  });
});

// 결제 TABLE에 정보 저장
app.post("/payment/insert", (req, res) => {
  const product = req.body.product;
  const mid = req.body.mid;
  const buyerName = req.body.buyerName;
  const buyerTel = req.body.buyerTel;
  const buyerHeadCount = req.body.buyerHeadCount;
  const sizeXS = req.body.sizeXS;
  const sizeS = req.body.sizeS;
  const sizeM = req.body.sizeM;
  const sizeL = req.body.sizeL;
  const sizeXL = req.body.sizeXL;
  const size2XL = req.body.size2XL;
  const amount = req.body.amount;
  const sqlQuery =
    "INSERT INTO payment (product, mid, buyer_name, buyer_tel, buyer_headcount, size_xsmall, size_small, size_medium, size_large, size_xlarge, size_2xlarge, result, amount) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlQuery,
    [
      product,
      mid,
      buyerName,
      buyerTel,
      buyerHeadCount,
      sizeXS,
      sizeS,
      sizeM,
      sizeL,
      sizeXL,
      size2XL,
      true,
      amount,
    ],
    (err, result) => {
      res.send("success!");
    }
  );
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

app.use(express.static(__dirname + "/client/build"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
