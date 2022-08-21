import React from 'react';
import PostCard from '../components/PostCard';
import { Layout } from './Main';

const Lists = () => {
  return (
    <Layout>
      <div className="top-section">
        <p>좋아한 포스트</p>
        <p>최근 읽은 포스트</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </Layout>
  );
};

export default Lists;
