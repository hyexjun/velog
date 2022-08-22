import styled from 'styled-components';

const Setting = () => {
  return (
    <Layout>
      <div style={{ display: 'flex', border: '1px solid red' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '150px' }}
        >
          <img
            src="https://velog.velcdn.com/images/hyexjun/profile/108c8f1a-b604-4881-9906-00270be78272/image.jpg"
            alt="프로필 사진"
            style={{ width: '150px', borderRadius: '100%' }}
          />
          <button>이미지 업로드</button>
          <button>이미지 제거</button>
        </div>
        <div style={{margin:'20px 50px'}}>
          <p>username</p>
          <p>usermail@gmail.com</p>
          <p>수정</p>
        </div>
      </div>
      <div>
        <div>
          <p>벨로그 제목</p>
          <p>hyexjun.Devlog</p>
          <p>수정</p>
        </div>
        <p>개인 페이지 좌측 상단에 나타나는 페이지 제목입니다.</p>
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 3% 25%;
`;

export default Setting;
