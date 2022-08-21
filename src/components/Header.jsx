import { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [login, setLogin] = useState(false);

  return (
    <StNav className="navbar navbar-expand-sm bg-light">
      <StDiv className="container-fluid">
        <a className="navbar-brand" href="#">
          v e l o g
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{
              border: '1px solid green',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <li className="nav-item">
              <button type="button" className="btn btn-outline-dark">
                다크모드
              </button>
            </li>

            <li className="nav-item">
              <button type="button" className="btn btn-outline-dark">
                돋보기
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-dark">
                새 글 작성
              </button>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                프사
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">내 벨로그</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    읽기 목록
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    설정
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    로그아웃
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-dark">
                로그인
              </button>
            </li>
          </ul>
        </div>
      </StDiv>
    </StNav>
  );
};

const StNav = styled.nav`
  padding: 10px 5%;
  border: 1px solid red;
`;

const StDiv = styled.div`
  /* padding: 10px; */
  border: 1px solid rebeccapurple;
`;

export default Header;
