import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Layout } from './Main';
import axios from 'axios';

const Main = () => {
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
      <div className="top-section">
        <div>좋아한 포스트</div>
        <div>최근 읽은 포스트</div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
        {posts.map((data) => (
          <PostCard key={data.postId} data={data} />
        ))}
      </div>
    </Layout>
  );
};

export default Main;
