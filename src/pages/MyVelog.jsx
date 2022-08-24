import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostCard from '../components/PostCard';
import axios from 'axios';

const MyVelog = () => {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    // const res = await axios.get('http://localhost:3030/posts')
    // console.log('All Posts', res.data);
    const { data } = await axios.get('http://localhost:3030/posts');
    console.log('All Posts', data);
    setPosts(data);
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Layout>
      {/* 프로필 상단 박스 */}
      <div
        style={{
          display: 'flex',
          maxWidth: '700px',
          border: '1px solid green',
          margin: '10px auto',
        }}
      >
        <img
          alt="프로필 사진"
          style={{ width: '20%', borderRadius: '100%' }}
          src="https://velog.velcdn.com/images/hyexjun/profile/108c8f1a-b604-4881-9906-00270be78272/image.jpg"
        />
        <div
          style={{
            // border: '1px solid blue',
            width: '100%',
            margin: '20px',
          }}
        >
          <h3>hyexjun</h3>
          <p>자기소개</p>
        </div>
      </div>
      <hr style={{ maxWidth: '700px', margin: '20px auto' }} />
      {/* 내 작성글들 */}
      <div style={{ border: '1px solid pink', display: 'flex', margin:'0 10%' }}>
        <div style={{ border: '1px solid orange', width:'200px' }}>
          <div>태그 목록</div>
          <div>전체보기</div>
          <div>태그 맵 뿌려주기</div>
        </div>
        <div style={{ border: '1px solid pink' }}>
          {/* 여기는 맵으로 카드 뿌려주기 */}
          <div>
            <div>글 제목</div>
            <div>글 본문 글 본문 글 본문</div>
            <div>태그 목록</div>
            <div>
              <span>8분 전</span>
              <span>0개의 댓글</span>
              <span>❤ 0</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Layout = styled.div`
  margin: 1% 5%;
  border: 1px solid red;
  height: 100vh;
`;

export default MyVelog;
