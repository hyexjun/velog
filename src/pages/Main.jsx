import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostCard from '../components/PostCard';
import axios from 'axios';
import apis from '../api';

const Main = () => {
  const [posts, setPosts] = useState([]);
  const getAllPostsFromMock = async () => {
    // const res = await axios.get('http://localhost:3030/posts')
    // console.log('All Posts', res.data);
    const { data } = await axios.get('http://localhost:3030/posts');
    console.log('All Posts', data);
    setPosts(data);
  };

  useEffect(() => {
    // getAllPostsFromMock();
    showAll();
  }, []);

  const showAll = () => {
    apis.getAllPosts().then((res) => {
      const data = res?.data?.content;
      console.log('server data', data);
      setPosts(data);
    });
  };

  return (
    <Layout>
      <div className="top-section">
        <div>
          <i className="fa-solid fa-arrow-trend-up" />
          <span>트렌딩</span>
        </div>
        <div>
          <i className="fa-solid fa-clock-rotate-left" />
          <span>최신</span>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
        {posts.map((data) => (
          <PostCard key={data.postId} data={data} />
        ))}
      </div>
    </Layout>
  );
};

export const Layout = styled.div`
  margin: 1% 5%;
  /* border: 1px solid red; */
`;

export default Main;
