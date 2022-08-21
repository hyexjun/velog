import React from 'react';
import styled from 'styled-components';
import PostCard from '../components/PostCard';

const Main = () => {
  return (
    <Layout>
      <div className="top-section">
        <span>트렌딩</span>
        <span>최신</span>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 3% 5%;
  border: 1px solid red;
`;

export default Main;
