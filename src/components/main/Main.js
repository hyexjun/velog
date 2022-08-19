import React from "react";
import styled from "styled-components";
import Header from "../header/Header";


const Main =()=>{
    const dummy=[
    {    title: "글 제목",
            content : '글 내용 예찬님 저녁먹으셨나요??? 조금있다 ',
            date:'5일전',
            user_profile:'img',
            user_name:'혜정',
            imageFile : 'https://item.kakaocdn.net/do/bef59207f5155a4eddd632c9a833e80d7154249a3890514a43687a85e6b6cc82'},
    {    title: "리액트",
            content : '공부',
            date:'10일전',
            user_profile:'https://item.kakaocdn.net/do/bef59207f5155a4eddd632c9a833e80d7154249a3890514a43687a85e6b6cc82',
            user_name:'장호',
            imageFile : null},
    {    title: "스프링",
            content : '공부',
            date:'15일전',
            user_profile:'img',
            user_name:'용성',
            imageFile : 'https://t1.daumcdn.net/cfile/tistory/12754A4A4E979E6E10'},
    {    title: "스프링",
            content : '공부',
            date:'15일전',
            user_profile:'img',
            user_name:'예찬',
            imageFile : 'https://t1.daumcdn.net/cfile/tistory/12754A4A4E979E6E10'},             
        ]
    


    return(
        <div style={{backgroundColor:'whitesmoke',width:'100%',height: window.innerHeight,padding:'20px',display:'flex',flexDirection:'row',justifyContent: 'center',gap:'30px',flexWrap:'wrap'}}>
         {dummy.map(e=><FormBox>
                        <img src={e.imageFile}></img>
                        <h3>{e.title}</h3>
                        <h5>{e.content}</h5>
                        <p style={{fontSize:'5px'}}>{e.date}</p>
                        <img style={{border:'1px solid black',borderRadius:'100%', width: '35px',height: '35px',objectFit: 'cover'}}src={e.user_profile}></img>
                        <p>{e.user_name}</p>  
                        </FormBox>
         )}
         </div>
    )
};
export default Main;

const FormBox = styled.div`
  background-color: white;
  width: 300px;
  maxheight: 500px;
  height:500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  margin-bottom:20px;
  margin-left:10px;
  padding: 15px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  form div {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
  form div button {
    margin-top: 50px;
    width: 100px;
    height: 50px;
  }
  img {
    width: 200px;
    height: 100px;
    object-fit: cover;
  }
`;
