export default function PostCard() {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src="https://images.velog.io/images/kim-mg/post/b6928585-e245-4e5f-b878-0bbf278e5886/velog_logo.png"
          className="card-img-top"
          alt="벨로그 로고 이미지"
        />
        <div className="card-body">
          <h5 className="card-title">글 제목</h5>
          <p className="card-text">
            이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는
            사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에
            당신 곁을 떠나야 합니다.
          </p>
        </div>
        <div className="card-footer">
          <span>프로필</span>
          <span>by username</span>
          <span>하트 수</span>
        </div>
      </div>
    </div>
  );
}
