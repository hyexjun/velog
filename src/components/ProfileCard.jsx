const ProfileCard = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          maxWidth: '700px',
          // border: '1px solid green',
          margin: '10px auto',
        }}
      >
        <img
          alt="프로필 사진"
          style={{ width: '20%', height: '20%', borderRadius: '100%' }}
          src="https://velog.velcdn.com/images/hyexjun/profile/108c8f1a-b604-4881-9906-00270be78272/image.jpg"
        />
        <div
          style={{
            // border: '1px solid blue',
            width: '100%',
            margin: '20px',
          }}
        >
          <h3>hyexjun</h3>
          <p>자기소개</p>
        </div>
      </div>
      <hr style={{ maxWidth: '700px', margin: '20px auto' }} />
    </>
  );
};

export default ProfileCard;
