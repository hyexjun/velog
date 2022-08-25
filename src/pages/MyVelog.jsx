import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostCard from '../components/PostCard';
import axios from 'axios';
import { Layout } from './Main';
import ProfileCard from '../components/ProfileCard';
import { getCookie } from '../shared/Cookie';

const MyVelog = () => {
  const [posts, setPosts] = useState([]);
  const user = getCookie('username')

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
      <ProfileCard user={user} />
      {/* 내 작성글들 */}
      <div
        style={{
          // border: '5px solid pink',
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '950px',
          margin: '0 auto',
        }}
      >
        {/* 태그 카테고리 섹션 */}
        <div
          style={{
            // border: '1px solid orange',
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
          style={{
            maxWidth: '700px',
            // border: '3px solid black',
            margin: '0',
          }}
        >
          {posts.map((data) => (
            <PostCard key={data.postId} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyVelog;
