import {React, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../modal/Modal";

 const Header=()=>{
    
    const [login, setLogin] = useState(false);
    const closeLoginModal = () => {setLogin(false)};
    const navigate = useNavigate();
    const goJoin = () => {
        navigate("/join")
        closeLoginModal();
      };
 
    return(
      <div>
    <Head>
    <Modal visible={login} closeModal={closeLoginModal}>
    <div>
        <h3>로그인</h3>
        <input type='text' placeholder="아이디를 입력하세요."></input>
        <input type='text' placeholder="비밀번호를 입력하세요."></input>
        <button>로그인</button>
     </div>
        <p>아직 회원이 아니신가요?</p>
        <p style={{color:'green',cursor:'pointer',fontWeight:'bold'}} onClick={goJoin}>회원가입</p>
        <button onClick={closeLoginModal}>되돌아가기</button>
     <div>
    </div>
    </Modal>
  
    <Title> velog </Title>
    <p>해</p>
    <button>돋보기</button>
    <Button onClick={()=>{setLogin(true)}} >로그인</Button>
    </Head>
    <p style={{textAlign:'center'}}>여기 추가 기능</p>
    </div>
    )

};
export default Header;


const Head =styled.div`
height: 100%;
display: flex;
background-color:whitesmoke;
align-items: center;
justify-content: space-between;
flex-wrap:wrap;
` 
const Title =styled.div`
margin-top:10px;
letter-spacing:2px;
font-size:26px;

`
const Button=styled.button`

border-radius:25px;
background-color:black;
color:white;
margin-right:150px;

font-size:15px;
font-weight:bold;
cursor: pointer;
&:hover {
  }


`
