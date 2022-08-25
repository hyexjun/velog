import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentList from '../components/CommentList';
import ProfileCard from '../components/ProfileCard';
import { Layout } from './Main';

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

  // 임시 태그
  let tagList = ['react', 'js', '살려주세요'];

  return (
    <Layout>
      <StContentBox>
        <h1>행운의 편지</h1>
        <StWriterInfo>
          <span style={{ marginRight: '5px' }}>tester</span>
          <span style={{ marginRight: '5px' }}>•</span>
          <span>약 19시간 전</span>
        </StWriterInfo>
        <StTagBox>
          {tagList.map((tag, idx) => (
            <StTagList key={idx}>{tag}</StTagList>
          ))}
        </StTagBox>
        <StText>
          이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는
          사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에
          당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한
          사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지
          모르지만 사실입니다. 영국에서 HGXWCH이라는 사람은 1930년에 이 편지를
          받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이
          당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내
          자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다.
          나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을
          얻었습니다. 미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다.
          결국 9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의
          행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이
          편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를
          받은 사람은 행운이 깃들것입니다. 힘들겠지만 좋은게 좋다고 생각하세요.
          7년의 행운을 빌면서...편지를 보내세요.
        </StText>
        <StButtonBox>
          <StButton>수정</StButton>
          <StButton>삭제</StButton>
        </StButtonBox>
      </StContentBox>

      <ProfileCard />
      <CommentList />
    </Layout>
  );
}

const StContentBox = styled.div`
  max-width: 700px;
  margin: 80px auto;
  text-align: justify;
  border: 1px solid black;
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
  padding: 5px 15px;
  font-weight: 600;
`;
