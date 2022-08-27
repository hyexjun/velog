import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function PostCard({ data }) {
  const navigate = useNavigate();

  return (
    <div
      className="col"
      onClick={() => {
        navigate(`/detail/${data.postId}`);
      }}
    >
      <div className="card h-100">
        {data.thumbnailUrl ? (
          <img src={data.thumbnailUrl} className="card-img-top" alt="" />
        ) : null}
        {data.imageUrl ? (
          <img src={data.imageUrl} className="card-img-top" alt="" />
        ) : null}
        <div className="card-body">
          <StTitle className="card-title">{data.title}</StTitle>
          <StText className="card-text">{data.content}</StText>
        </div>
        <div
          style={{
            margin: '-50px 15px 10px 15px',
            // border: '1px solid green',
            fontSize: '12px',
            color: 'grey',
          }}
        >
          {/* {data.createdAt.slice(0, 14)} • 1개의 댓글 */}
          며칠 전 • 1개의 댓글
        </div>
        <div
          className="card-footer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={data.profileImageUrl}
              alt="프로필 사진"
              // 프로필 사진 크기
              style={{
                width: '45px',
                borderRadius: '100%',
                marginRight: '10px',
              }}
            />
            <div>
              by <span style={{ fontWeight: 'bold' }}>{data.username}</span>
            </div>
          </div>
          <div
          // style={{ border: '1px solid blue' }}
          >
            {/* ❤ {data.likeCount} */}❤ {Math.floor(Math.random() * 100)}
          </div>
        </div>
      </div>
    </div>
  );
}

const StTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const StText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  /* text-align: justify; */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  /* border: 1px solid red; */
`;
