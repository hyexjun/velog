import styled from 'styled-components';

export default function PostCard({ data }) {
  return (
    <div className="col">
      <div className="card h-100">
        {data.imageUrl ? (
          <img src={data.imageUrl} className="card-img-top" alt="" />
        ) : null}
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
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
          며칠 전 • n개의 댓글
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
            ❤ {data.likeCount}
          </div>
        </div>
      </div>
    </div>
  );
}

const StText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap;
  word-break: break-all; */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  /* border: 1px solid red; */
`;
