import React from 'react';
import styled from 'styled-components';
import PostCard from '../components/PostCard';

const Main = () => {
  return (
    <Layout>
      <div className="top-section">
        <i class="fa-solid fa-arrow-trend-up">트렌딩</i>
        <i class="fa-solid fa-clock-rotate-left">최신</i>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </Layout>
  );
};

export const Layout = styled.div`
  margin: 1% 5%;
  border: 1px solid red;
`;

export default Main;
