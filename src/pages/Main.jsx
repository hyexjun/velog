import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const dummy = [
    {
      title: '글 제목',
      content: '글 내용 ',
      date: '5일전',
      user_profile: 'img',
      user_name: '혜정',
      imageFile:
        'https://item.kakaocdn.net/do/bef59207f5155a4eddd632c9a833e80d7154249a3890514a43687a85e6b6cc82',
      heart: 1,
    },
    {
      title: '리액트',
      content: '공부',
      date: '10일전',
      user_profile:
        'https://item.kakaocdn.net/do/bef59207f5155a4eddd632c9a833e80d7154249a3890514a43687a85e6b6cc82',
      user_name: '장호',
      imageFile: null,
      heart: 3,
    },
    {
      title: '스프링',
      content: '공부',
      date: '15일전',
      user_profile: 'img',
      user_name: '용성',
      imageFile: 'https://t1.daumcdn.net/cfile/tistory/12754A4A4E979E6E10',
      heart: 5,
    },
    {
      title: '스프링',
      content: '공부',
      date: '15일전',
      user_profile: 'img',
      user_name: '예찬',
      imageFile: 'https://t1.daumcdn.net/cfile/tistory/12754A4A4E979E6E10',
      heart: 0,
    },
  ];
  const navigate = useNavigate();
  const goDetail = () => {
    navigate('/detail');
  };

  return (
    <>
      <Header />
      <Wrap>
        {dummy.map((e) => (
          <FormBox onClick={goDetail}>
            <img src={e.imageFile}></img>
            <h3>{e.title}</h3>
            <h5>{e.content}</h5>
            <p style={{ fontSize: '5px' }}>{e.date}</p>
            <div style={{ display: 'flex', fileDirection: 'row' }}>
              <img
                style={{
                  border: '1px solid gray',
                  borderRadius: '100%',
                  width: '35px',
                  height: '35px',
                  objectFit: 'cover',
                }}
                src={e.user_profile}
              ></img>
              <p>{e.user_name}</p>
              <p>{e.heart}</p>
            </div>
          </FormBox>
        ))}
      </Wrap>
    </>
  );
};
export default Main;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  background-color: whitesmoke;
  flex-wrap: wrap;
  padding: 20px;
`;

const FormBox = styled.div`
  background-color: white;
  width: 300px;
  max-height: 500px;
  height: 380px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  margin-bottom: 20px;
  margin-left: 10px;
  padding: 15px;
  cursor: pointer;
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
    width: 300px;
    height: 120px;
    object-fit: cover;
  }
  form span {
    text-align: right;
  }
`;
