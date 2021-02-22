import './Welcome.css';

function Welcome() {
  return (
    <main>
      <div className="welcome">
        <p>안녕하세요.</p>
        <h1>
          <span className="yellow">프론트엔드</span> 개발자
        </h1>
        <h1>임우성 입니다.</h1>
      </div>
      <div className="contact">
        <p>010.4947.8512</p>
        <p>w0_0ss@naver.com</p>
      </div>
      <div className="explore">
        <p>Scroll to Explore</p>
        <div className="long-line" />
      </div>
    </main>
  );
}

export default Welcome;
