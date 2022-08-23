import styled from 'styled-components';

export default function PostCard({ data }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src="https://images.velog.io/images/kim-mg/post/b6928585-e245-4e5f-b878-0bbf278e5886/velog_logo.png"
          className="card-img-top"
          alt="벨로그 로고 이미지"
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <StText className="card-text">{data.content}</StText>
          <div>며칠 전 • n개의 댓글</div>
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
                width: '30px',
                borderRadius: '100%',
                marginRight: '10px',
              }}
            />
            <div>
              by <span style={{ fontWeight: 'bold' }}>{data.username}</span>
            </div>
          </div>
          <div>❤ {data.likeCount}</div>
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
`;
