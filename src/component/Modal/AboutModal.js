import React, { useEffect, useRef } from 'react';
import { ReactComponent as Close } from './close.svg';

function About({ onClick }) {
  const page = useRef();
  useEffect(() => {
    page.current.classList.add('open', 'open-page');
  }, []);

  return (
    <div ref={page} className="page-container">
      <div className="page-title">
        <h2>Profile</h2>
        <button
          type="button"
          onClick={() => {
            onClick(page);
          }}
        >
          <Close />
        </button>
      </div>

      <div className="page-section">
        <h3>임우성</h3>
        <div className="about">
          <div>
            <p>생일</p>
            <p>98.02.25</p>
          </div>
          <div>
            <p>휴대폰</p>
            <p>010.4947.8512</p>
          </div>
          <div>
            <p>이메일</p>
            <p>w0_0ss@naver.com</p>
          </div>
        </div>
      </div>

      <div className="page-section">
        <h3>학력</h3>
        <p>2016.02 :선린인터넷고등학교 멀티미디어과 졸업.</p>
      </div>

      <div className="page-section">
        <h3>소개</h3>
        <p>만들고 싶은걸 만들 줄 아는 개발자가 되고싶습니다.</p>
        <p>안녕하십니까! 프론트엔드 신입 개발자 임우성입니다.</p>
        <p>
          개발을 늦게 배웠지만 그만큼 변화에 잘 적응할 수 있고 배움에 가림이
          없습니다.
        </p>
        <p>
          그리고 디자인에 관심이 많아 프로젝트를 진행할 때 디자인적으로
          노력합니다.
        </p>
      </div>

      <div className="page-section">
        <h3>스킬</h3>
        <div className="skill">
          <div>HTML5</div>
          <div>CSS3</div>
          <div>JavaScript</div>
          <div>JQuery</div>
          <div>React</div>
          <div>Node.js</div>
        </div>
        <div className="skill">
          <div>Photoshop</div>
          <div>Illustrator</div>
          <div>Figma</div>
        </div>
      </div>
    </div>
  );
}

export default About;
