import React from "react";
import { useNavigate } from "react-router-dom";

export default function Join(){
    const navigate = useNavigate();
    const goMain = () => {
        navigate("/main");
      };
    return(
        <div style={{textAlign:'center'}}>
        <h1>환영합니다.</h1>
        <h4>기본 회원정보를 등록하세요.</h4>
        <p>아이디</p>
        <input></input>
        <button>중복확인</button>
        <p>비밀번호</p>
        <input></input>
        <p>비밀번호 확인</p>
        <input></input>
        <div>
        <button onClick={goMain}>취소</button>
        <button>확인</button>
        </div>
        </div>
    )
}