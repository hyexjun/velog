import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Detail() {
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
    <>
      <div>제목</div>
      <div>
        <div>아이디</div>
        <div>작성일</div>
        <div>좋아요</div>
      </div>
      <div>태그 박스</div>
      <div>사진 칸</div>
      <div>내용 박스</div>
      <div>
        <img src="" alt="게시글 작성자 프사" />
        <div>
          <p>아이디</p>
          <p>소개?</p>
        </div>
      </div>
      <div>
        <div>n개의 댓글</div>
        <input type="text" placeholder="댓글을 작성하세요" />
        <button>댓글 작성</button>
      </div>
      <div>
        <div>
          <img src="" alt="댓글 작성자 프사" />
          <div>댓글 작성자</div>
          <div>댓글 작성일시</div>
        </div>
        <div>댓글 내용</div>
      </div>
    </>
  );
}
