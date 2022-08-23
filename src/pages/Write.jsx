import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import apis from '../api';

const Write = () => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const contentsRef = useRef();
  const tagsRef = useRef();
  // const title=titleRef.current.value;
  // const contents=contentsRef.current.value;
  // const tags=tagsRef.current.value;

  const [tagList, setTagList] = useState([]);

  const SubmitHandler = () => {
    const tags = tagsRef.current.value;
    console.log(tags);
  };

  // 출간하기 실행 시 api 호출
  const WriteHandler = () => {
    const title = titleRef.current.value;
    const contents = contentsRef.current.value;
    const tags = tagsRef.current.value;
    apis
      .writePost({
        title: title,
        contents: contents,
        tags: tags,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //엔터키 입력 확인하는 함수
  const EnterKeyInput = () => {
    if (window.event.keyCode === 13 && tagsRef.current.value !== '') {
      setTagList([...tagList, tagsRef.current.value]);
      tagsRef.current.value = '';
    }
  };
  const Exit = () => {
    navigate('/');
  };
  return (
    <Layout>
      <StTitleInput placeholder="제목을 입력하세요" ref={titleRef} />
      <div>
        <StTagInput
          type="text"
          placeholder="태그를 입력하세요"
          onKeyUp={EnterKeyInput}
          ref={tagsRef}
          onChange={SubmitHandler}
        />
        <div style={{ display: 'flex', gap: '3px' }}>
          {tagList.map((tag, idx) => (
            <div
              key={idx}
              style={{
                background: 'orange',
                border: 'none',
                borderRadius: '2px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      {/* <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      /> */}
      <StTextarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="내용을 적어주세요"
        ref={contentsRef}
      ></StTextarea>
      <StSubmitBox>
        <i
          className="fa-solid fa-arrow-left"
          onClick={Exit}
          style={{ cursor: 'pointer' }}
        >
          나가기
        </i>
        <StPostButton>출간하기</StPostButton>
      </StSubmitBox>
    </Layout>
  );
};
const Layout = styled.div`
  margin: 1% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red
`;
const StTitleInput = styled.input`
  width: 80%;
  height: 7vh;
`;
const StTagInput = styled.input`
  width: 80%;
  height: 5vh;
`;
const StTextarea = styled.textarea`
  width: 80%;
  height: 50vh;
`;
const StSubmitBox = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border: 1px solid red;
`;
const StPostButton = styled.button`
  background-color: #12b886;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 80%;
`;
export default Write;
