import styled from 'styled-components';

const ComItem = () => {
  return (
    <div
      style={{
        maxWidth: '700px',
        border: '1px solid green',
        margin: '10px auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          // border: '1px solid red',
          paddingBottom: '10px',
        }}
      >
        <img
          style={{ borderRadius: '100%', width: '7%', height: '7%' }}
          src="https://velog.velcdn.com/images/hyexjun/profile/108c8f1a-b604-4881-9906-00270be78272/image.jpg"
          alt="댓글 작성자 프사"
        />
        <div style={{ marginLeft: '10px' }}>
          <div style={{ fontWeight: '600' }}>호랑말코</div>
          <div style={{ fontSize: '14px', color: 'grey' }}>2일 전</div>
        </div>
      </div>
      <div style={{ textAlign: 'justify' }}>
        이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게
        행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을
        떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내
        주셔야 합니다.
      </div>
    </div>
  );
};

export default ComItem;
