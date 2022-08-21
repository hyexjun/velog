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
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
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
  height: 50px;
`;
const StCopyTitle = styled.div`
  width: 50%;
  height: 50px;
`;

export default Write;
