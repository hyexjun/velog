import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useState } from 'react';
import styled from 'styled-components';

const Write = () => {
  const [title, setTitle] = useState(['제목을 적어..']);

  return (
    <Layout>
      <StTitle>
        <StInputTitle value={title} />
        <StCopyTitle />
      </StTitle>
      {/* <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      /> */}
      <StTextarea name="" id="" cols="30" rows="10"></StTextarea>
      <StSubmitBox>
        <i className="fa-solid fa-arrow-left"> 나가기</i>
        <StPostButton>출간하기</StPostButton>
      </StSubmitBox>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 0 5%;
`;

const StTitle = styled.div`
  display: flex;
`;

const StInputTitle = styled.input`
  width: 50%;
  height: 10vh;
`;
const StCopyTitle = styled.input`
  width: 50%;
  height: 10vh;
`;
const StTextarea = styled.textarea`
  width: 50%;
  height: 70vh;
`;
const StSubmitBox = styled.div`
  width: 50%;
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
