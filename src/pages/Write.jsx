// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import apis from '../api/index';
import Form from 'react-bootstrap/Form';

const Write = () => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const contentsRef = useRef();
  const tagsRef = useRef();
  const imgRef = useRef();
  const [tagList, setTagList] = useState([]);
  const [imgFile, setImgFile] = useState();

  // const [attachment, setAttachment] = useState();
  // const onFileChange = (event) => {
  //   const {
  //     target: { files },
  //   } = event;
  //   const theFile = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = (finishedEvent) => {
  //     const result = finishedEvent.currentTarget.result;
  //     setAttachment(result);
  //   };
  //   reader.readAsDataURL(theFile);
  // };

  // 출간하기 실행 시 api 호출
  // const WriteHandler = () => {
  //   const title = titleRef.current.value;
  //   const contents = contentsRef.current.value;
  //   const tags = tagList;
  //   apis
  //     .writePost({
  //       title: title,
  //       content: contents,
  //       tags: tags,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  //엔터키 입력 확인하는 함수
  const EnterKeyInput = () => {
    if (window.event.keyCode === 13 && tagsRef.current.value !== '') {
      setTagList([...tagList, tagsRef.current.value]);
      tagsRef.current.value = '';
    }
  };

  const onFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  const handlePublishing = () => {
    const formData = new FormData();
    // const newPost = { title:titleRef.current.value, content: contentsRef.current.value, imageFiles: [attachment],tags:tagList };
    formData.append('title', titleRef.current.value);
    formData.append('content', contentsRef.current.value);
    formData.append('imageFiles', imgRef.current.files[0]);
    formData.append('tags', tagList);
    apis
      .writePost(formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert('포스팅 완료')
    // navigate('/')
    // window.location.reload(true)
    window.location.replace('/')
  };

  //삭제 기능
  const DelTag = (idxx) => {
    const newTags = tagList.filter((item, idx) => {
      return idx !== idxx;
    });
    setTagList(newTags);
  };

  const Exit = () => {
    navigate('/');
  };
  return (
    <Layout>
      <StTitleInput placeholder="제목을 입력하세요" ref={titleRef} />
      <StTagInput
        type="text"
        placeholder="태그를 입력하세요"
        onKeyUp={EnterKeyInput}
        ref={tagsRef}
      />
      <StTagBox>
        {tagList.map((tag, idx) => (
          <div
            key={idx}
            onClick={() => DelTag(idx)}
            style={{
              background: '#eee',
              border: 'none',
              borderRadius: '20px',
              height: '35px',
              padding: '5px 15px',
            }}
          >
            {tag}
          </div>
        ))}
      </StTagBox>
      <StTextarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="내용을 적어주세요"
        ref={contentsRef}
      ></StTextarea>
      {/* <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      /> */}
      {/* <Form.Group controlId="formFileMultiple" className="mb-3"> */}
      {/* <Form.Label>사진추가,,</Form.Label> */}
      <Form.Control
        type="file"
        multiple
        style={{ border: '1px solid #eee' }}
        accept="image/*"
        ref={imgRef}
        encType="multipart/form-data"
        onChange={(e) => onFileChange(e)}
      />
      {/* </Form.Group> */}
      <StSubmitBox>
        <i
          className="fa-solid fa-arrow-left"
          onClick={Exit}
          style={{ cursor: 'pointer' }}
        >
          나가기
        </i>
        <StPostButton onClick={handlePublishing}>출간하기</StPostButton>
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
  /* border: 1px solid red; */
  gap: 0.5rem;
`;
const StTitleInput = styled.input`
  width: 100%;
  height: 7vh;
  border: 1px solid #eee;
  border-radius: 5px;
  padding-left: 10px;
`;
const StTagInput = styled.input`
  width: 100%;
  height: 5vh;
  border: 1px solid #eee;
  border-radius: 5px;
  padding-left: 10px;
`;
const StTagBox = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  height: 5vh;
  align-items: center;
  color: #12b886;
`;
const StTextarea = styled.textarea`
  width: 100%;
  height: 50vh;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
`;
const StSubmitBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  /* border: 1px solid red; */
`;
const StPostButton = styled.button`
  background-color: #12b886;
  color: white;
  border: none;
  border-radius: 5px;
  width: 110px;
  height: 80%;
`;
export default Write;
