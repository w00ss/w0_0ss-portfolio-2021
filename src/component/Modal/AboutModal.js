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
        <p>만들고 싶은 걸 만들 줄 아는 개발자가 되고 싶습니다.</p>
        <p>안녕하세요. 신입 프론트엔드 개발자 임우성입니다.</p>
        <p>
          웹 개발의 처음은 디자이너로 시작했으나 군 전역 후 프론트엔드 개발의
          매력에 빠져 프론트엔드를 공부하게 됐습니다.
        </p>
        <p>HTML5, CSS3, Javascript에서 현재는 React를 사용하고 있습니다.</p>
        <p>
          현재 목표는 Typescript를 실제 프로젝트에 적용하여 웹 애플리케이션을
          개발해보고 싶습니다.
        </p>
        <p>
          새로움을 배워나가는 것이 즐겁고, 만들고 싶었던 웹 앱을 만들어 나가는
          것에 큰 뿌듯함을 느낍니다.
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
