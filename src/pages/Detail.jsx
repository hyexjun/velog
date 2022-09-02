import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentList from '../components/CommentList';
import ProfileCard from '../components/ProfileCard';
import { Layout } from './Main';
import apis from '../api';
import { useNavigate, useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [tags, setTags] = useState([]);
  const [user, setUser] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const getAllPostsFromMock = async () => {
    // const res = await axios.get('http://localhost:3030/posts')
    // console.log('All Posts', res.data);
    const { data } = await axios.get('http://localhost:3030/posts');
    console.log(`post ${id}`, data[id - 1]);
    setPost(data[id - 1]);
    setTags(data[id - 1].hashtags);
    setUser(data[id - 1].username);
  };

  useEffect(() => {
    getAllPostsFromMock();
    // showDetail();
  }, []);

  const showDetail = () => {
    apis.getThisPost(id).then((res) => {
      const data = res?.data;
      console.log('this post', data);
      setPost(data);
      setTags(data.hashtags);
      setUser(data.username);
    });
  };
  const DeletePost = () => {
    console.log(params.id);

    apis
      .removePost(params.id)
      .then((res) => {
        console.log(res);
        window.location.replace('/');
      })
      .catch((err) => {
        console.log(err);
        alert('타인의 게시글은 삭제가 안 됩니다 :)');
      });
    // navigate('/');
  };

  return (
    <Layout>
      <StContentBox>
        <h1>{post.title}</h1>
        <StWriterInfo>
          <span style={{ marginRight: '5px' }}>{post.username}</span>
          <span style={{ marginRight: '5px' }}>•</span>
          <span>약 19시간 전</span>
        </StWriterInfo>
        <StTagBox>
          {tags.map((tag, idx) => (
            <StTagList key={idx}>{tag}</StTagList>
          ))}
        </StTagBox>
        <StImage src={post.imageUrl} alt="" />
        <StText>{post.content}</StText>
        <StButtonBox>
          {/* <StButton>수정</StButton> */}
          <StButton onClick={DeletePost}>삭제</StButton>
        </StButtonBox>
      </StContentBox>

      <ProfileCard user={user} />
      <CommentList />
    </Layout>
  );
}

const StContentBox = styled.div`
  max-width: 700px;
  margin: 80px auto;
  text-align: justify;
  /* border: 1px solid black; */
`;

const StWriterInfo = styled.div`
  /* display: flex; */
`;

const StTagBox = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
`;

const StTagList = styled.div`
  display: flex;
  background: #eeeeee;
  border: none;
  color: #12b886;
  border-radius: 20px;
  height: 35px;
  padding: 5px 15px;
`;

const StImage = styled.img`
  width: 100%;
`;

const StText = styled.div`
  /* border: 1px solid red; */
  margin: 20px 0;
`;

const StButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StButton = styled.button`
  border: none;
  border-radius: 5px;
  background: #12b886;
  color: #eeeeee;
  padding: 3px 15px;
  font-weight: 600;
  margin-left: 5px;
`;
