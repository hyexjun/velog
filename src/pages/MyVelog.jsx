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
          maxWidth: '800px',
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
      <div
        style={{
          border: '5px solid pink',
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        {/* 태그 카테고리 섹션 */}
        <div
          style={{
            border: '1px solid orange',
            width: '220px',
            minWidth: '180px',
          }}
        >
          <div>태그 목록</div>
          <hr />
          <div>전체보기</div>
          <div>모든 태그 맵 뿌리기 (3)</div>
        </div>
        {/* 여기는 맵으로 카드 뿌려주기 */}
        <div
          className="row row-cols-1 g-4"
          style={{ maxWidth: '700px', border: '3px solid black', margin: '0' }}
        >
          {posts.map((data) => (
            <PostCard key={data.postId} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const Layout = styled.div`
  margin: 1% 5%;
  /* border: 1px solid red; */
`;

// MyVelog.defaultProps = {
//   posts: [],
// };

export default MyVelog;
