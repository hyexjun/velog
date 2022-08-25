import styled from 'styled-components';
import ComItem from './ComItem';

const CommentList = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <StWriteBox>
        <StComTitle>1개의 댓글</StComTitle>
        <StTextarea type="text" placeholder="댓글을 작성하세요" />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <StComAdd>댓글 작성</StComAdd>
        </div>
      </StWriteBox>
      <ComItem />
    </div>
  );
};

const StWriteBox = styled.div`
  /* display: flex; */
  max-width: 700px;
  /* border: 1px solid green; */
  margin: 10px auto;
`;

const StTextarea = styled.textarea`
  margin: 10px 0;
  width: 100%;
  height: 100px;
  border: 1px solid #eee;
  border-radius: 5px;
`;

const StComTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const StComAdd = styled.button`
  border: none;
  border-radius: 5px;
  margin: 5px 0;
  width: 100px;
  height: 30px;
  font-weight: 600;
  background: #12b886;
  color: white;
`;

export default CommentList;
