import './Intro.css';

function Intro({ onClick }) {
  return (
    <div className="intro">
      <h1>
        <span>안녕하세요. 프론트엔드 개발자 </span>
        <span className="name" onClick={onClick}>
          임우성
        </span>
        <span> 입니다.</span>
        <span className="blink">_</span>
      </h1>
    </div>
  );
}

export default Intro;
