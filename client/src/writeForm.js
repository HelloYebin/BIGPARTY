import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./writeForm.css";
import ImageResize from "quill-image-resize";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
Quill.register("modules/ImageResize", ImageResize);

export default function WriteForm() {
  const [inputTitle, setInputTitle] = useState("");
  const [textValue, setTextValue] = useState("");
  const [category, setCategory] = useState("notice");

  const navigate = useNavigate();

  const handleTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleBody = (e) => {
    setTextValue(e);
  };
  const handleOption = (e) => {
    setCategory(e.target.value);
  };
  //글 등록하기
  const register = (e) => {
    const password = 1234;
    const que = prompt("비밀번호를 입력해주세요");
    if (Number(que) === password && category === "notice") {
      e.preventDefault();
      Axios.post("/api/insert", {
        title: inputTitle,
        content: textValue,
      }).then(() => {
        setTextValue("");
        setInputTitle("");
        alert("공지사항 등록 완료!");
        navigate("/news/notice/admin");
      });
      // } else if (Number(que) === password && category === "press") {
      //   e.preventDefault();
      //   Axios.post("http://localhost:8001/press/insert", {
      //     title: inputTitle,
      //     content: textValue,
      //   }).then(() => {
      //     setTextValue("");
      //     setInputTitle("");
      //     alert("보도자료 등록 완료!");
      //     navigate("/news/press");
      //   });
    } else {
      e.preventDefault();
      alert("비밀번호가 틀렸습니다.");
    }
  };

  WriteForm.modules = {
    toolbar: [
      [{ header: [1, 2, false] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
    ],

    ImageResize: {
      parchment: Quill.import("parchment"),
    },
  };

  WriteForm.formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
    "font",
    "size",
    "code-block",
  ];

  return (
    <div className="App">
      <form className="board" onSubmit={register}>
        <div className="boardTop">
          <select style={{ height: "45px" }} onChange={handleOption}>
            <option value="notice">공지사항</option>
            <option value="press">보도자료</option>
            <option value="jumping">점핑자료</option>
          </select>
          <input
            type="text"
            className="writeTitle"
            name="title"
            onChange={handleTitle}
            value={inputTitle}
            required
          ></input>
        </div>
        <ReactQuill
          placeholder="Write somthing amazing"
          modules={WriteForm.modules}
          formats={WriteForm.formats}
          onChange={handleBody}
          value={textValue}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
}
