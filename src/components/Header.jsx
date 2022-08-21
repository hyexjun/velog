import { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';
import LoginModal from './LoginModal';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StNav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <h3>velog</h3>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-menu">
              <i class="fa-solid fa-sun">다크모드</i>
              <i class="fa-solid fa-magnifying-glass">검색</i>
              <button type="button" className="btn btn-outline-dark">
                새 글 작성
              </button>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
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
                    <a className="dropdown-item">읽기 목록</a>
                  </li>
                  <li>
                    <a className="dropdown-item">설정</a>
                  </li>
                  <li>
                    <a className="dropdown-item">로그아웃</a>
                  </li>
                </ul>
              </li>
              <Button variant="dark" onClick={handleShow}>
                로그인
              </Button>
            </ul>
          </div>
        </div>
      </StNav>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <LoginModal />
      </Modal>
    </>
  );
};

const StNav = styled.nav`
  padding: 10px 5%;
  border: 1px solid red;
`;

export default Header;
