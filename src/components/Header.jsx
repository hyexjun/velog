import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Header = () => {
  const [login, setLogin] = useState(false);
  const closeLoginModal = () => {
    setLogin(false);
  };
  const [signup, setSignup] = useState(false);

  return (
    <div>
      <Head>
        <Modal visible={login} closeModal={closeLoginModal}>
          {signup ? (
            <>
              <div>
                <img
                  style={{ width: '168px' }}
                  src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
                  alt="welcome"
                />
                <p>환영합니다!</p>
              </div>
              <div>
                <div>
                  <h3>회원가입</h3>
                  <p>아이디로 회원가입</p>
                  <div>
                    <input type="text" placeholder="아이디를 입력하세요." />
                    <input type="text" placeholder="비밀번호를 입력하세요." />
                    <input type="text" placeholder="비밀번호를 입력하세요." />
                  </div>
                  <button>회원가입</button>
                </div>
                <div>
                  <p>소셜 계정으로 회원가입</p>
                  <button>깃헙</button>
                  <button>구글</button>
                  <button>페북</button>
                </div>
                <div>
                  <span>계정이 이미 있으신가요?</span>
                  <span
                    style={{
                      color: 'green',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    onClick={() => setSignup(false)}
                  >
                    로그인
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <img
                  style={{ width: '168px' }}
                  src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
                  alt="welcome"
                />
                <p>환영합니다!</p>
              </div>
              <div>
                <div>
                  <h3>로그인</h3>
                  <p>아이디로 로그인</p>
                  <div>
                    <input type="text" placeholder="아이디를 입력하세요." />
                    <input type="text" placeholder="비밀번호를 입력하세요." />
                  </div>
                  <button>로그인</button>
                </div>
                <div>
                  <p>소셜 계정으로 로그인</p>
                  <button>깃헙</button>
                  <button>구글</button>
                  <button>페북</button>
                </div>
                <div>
                  <span>아직 회원이 아니신가요?</span>
                  <span
                    style={{
                      color: 'green',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    onClick={() => setSignup(true)}
                  >
                    회원가입
                  </span>
                </div>
              </div>
            </>
          )}
        </Modal>

        <Title>velog</Title>
        <p>해</p>
        <button>돋보기</button>
        <Button
          onClick={() => {
            setLogin(true);
          }}
        >
          로그인
        </Button>
      </Head>
      <p style={{ textAlign: 'center' }}>여기 추가 기능</p>
    </div>
  );
};
export default Header;

const Head = styled.div`
  height: 100%;
  display: flex;
  background-color: whitesmoke;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Title = styled.div`
  margin-top: 10px;
  letter-spacing: 2px;
  font-size: 26px;
`;
const Button = styled.button`
  border-radius: 25px;
  background-color: black;
  color: white;
  margin-right: 150px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
  }
`;
