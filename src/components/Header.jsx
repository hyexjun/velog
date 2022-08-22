import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container, Nav, Navbar, Modal } from 'react-bootstrap';
import LoginModal from './LoginModal';

const Header2 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Container className="header-box">
          <Nav className="me-auto">
            <h2 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              velog
            </h2>
          </Nav>
          <Nav className="header-menu">
            <i class="fa-solid fa-sun" />
            <i class="fa-solid fa-magnifying-glass" />
            <Button variant="outline-dark" onClick={() => navigate('/write')}>
              새 글 작성
            </Button>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  alt="프로필 사진"
                  style={{ width: '45px', borderRadius: '100%' }}
                  src="https://velog.velcdn.com/images/hyexjun/profile/108c8f1a-b604-4881-9906-00270be78272/image.jpg"
                />
              </div>
              <ul className="dropdown-menu">
                <li
                  className="dropdown-item"
                  onClick={() => navigate('/myvelog')}
                >
                  내 벨로그
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => navigate('/lists')}
                >
                  읽기 목록
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => navigate('/setting')}
                >
                  설정
                </li>
                <li className="dropdown-item">로그아웃</li>
              </ul>
            </li>

            <Button variant="dark" onClick={handleShow}>
              로그인
            </Button>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>

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

export default Header2;
