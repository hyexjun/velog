import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export default function SignUp() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/main');
  };
  const idInputRef = useRef();
  const pwInputRef = useRef();
  const joinHandler = (e) => {
    e.preventDefault();
    const id = idInputRef.current.value;
    const pw = pwInputRef.current.value;
    console.log('회원가입', id, pw);
    navigate('/main');
  };

  return (
    <form style={{ textAlign: 'center' }}>
      <h1>환영합니다.</h1>
      <h4>기본 회원정보를 등록하세요.</h4>
      <p>아이디</p>
      <Input ref={idInputRef} placeholder='아이디를 입력해주세요.'></Input>
      <button>중복확인</button>
      <p>비밀번호</p>
      <Input ref={pwInputRef} placeholder='비밀번호를 입력해주세요.'></Input>
      <p>비밀번호 확인</p>
      <Input
        ref={pwInputRef}
        placeholder='비밀번호를 다시 입력해주세요.'
      ></Input>
      <div>
        <button onClick={goMain}>취소</button>
        <button onClick={joinHandler}>가입하기</button>
      </div>
    </form>
  );
}
const Input = styled.input`
  border: none;
  text-decoration: underline;
  font-size: 20px;
  width: 300px;
  height: 30px;
`;
