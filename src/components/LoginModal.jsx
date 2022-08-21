import { useRef, useState } from 'react';
import styled from 'styled-components';

export default function LoginModal() {
  const [signup, setSignup] = useState(false);

  const idRef = useRef();
  const pw1Ref = useRef();
  const pw2Ref = useRef();

  return (
    <StWrap>
      <StLeftSide>
        <img
          style={{ width: '200px' }}
          src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
          alt="welcome"
        />
        <h3>환영합니다!</h3>
      </StLeftSide>
      <StRightSide>
        <div>
          <h3>{!signup ? '로그인' : '회원가입'}</h3>
          <p>아이디로 {!signup ? '로그인' : '회원가입'}</p>
          <div style={{ display: 'flex' }}>
            <StForm>
              <input
                type="text"
                placeholder="아이디를 입력하세요"
                ref={idRef}
              />
              <input
                type="text"
                placeholder="비밀번호를 입력하세요"
                ref={pw1Ref}
              />
              {!signup ? null : (
                <input type="text" placeholder="비밀번호 한번더" ref={pw2Ref} />
              )}
            </StForm>
            {!signup ? (
              <StBuuton onClick={() => {}}>로그인</StBuuton>
            ) : (
              <StBuuton onClick={() => {}}>회원가입</StBuuton>
            )}
          </div>
        </div>
        <br />
        <div>
          <p>소셜 계정으로 {!signup ? '로그인' : '회원가입'}</p>
          <StSocialBox>
            <StSocial>깃헙</StSocial>
            <StSocial>구글</StSocial>
            <StSocial>페북</StSocial>
          </StSocialBox>
        </div>
        <br />
        <div>
          <span>
            {!signup ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'}
          </span>
          <span
            style={{
              color: '#12b886',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
            onClick={() => setSignup(!signup)}
          >
            {!signup ? '회원가입' : '로그인'}
          </span>
        </div>
      </StRightSide>
    </StWrap>
  );
}

const StWrap = styled.div`
  border: 1px solid red;
  display: flex;
  height: 60vh;
`;

const StLeftSide = styled.div`
  border: 1px solid blue;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StRightSide = styled.div`
  border: 1px solid green;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;

const StForm = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const StBuuton = styled.button`
  background-color: #12b886;
  color: white;
  border: none;
  width: 100px;
  height: auto;
  font-size: 18px;
  font-weight: 600;
`;

const StSocial = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: none;
`;

const StSocialBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-evenly;
`;
