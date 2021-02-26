import React from 'react';
import './About.css';

function About() {
  return (
    <div className="page-container">
      <div className="about-name">
        <h1>임우성</h1>
        {/* eslint-disable-next-line */}
        <p className="gray">//Lim Wooseong</p>
      </div>

      <div className="long-line" />

      <div className="about-info">
        <div className="info-section">
          <h4>생일_</h4>
          <p>1998.02.25</p>
        </div>
        <div className="info-section">
          <h4>핸드폰</h4>
          <p>010 4947 8512</p>
        </div>
        <div className="info-section">
          <h4>이메일_</h4>
          <p>w0_0ss@naver.com</p>
        </div>
      </div>

      <div>
        <h2>학력</h2>
        <h4>2016.02.</h4>
        <p>선린인터넷고등학교 멀티미디어과 졸업.</p>
      </div>

      <div>
        <h2>소개</h2>
        <p>ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</p>
      </div>

      <div className="about-skill">
        <h1>Skill</h1>
        <p>ㅁㄴㅇ</p>
      </div>
    </div>
  );
}

export default About;

/* <div className="long-line" />
      <div className="about-info">
        <div className="about-section">
          <p className="about-section-title">생일_</p>
          <p>1998.02.25</p>
        </div>
        <div className="about-section">
          <p className="about-section-title">핸드폰_</p>
          <p>010 4947 8512</p>
        </div>
        <div className="about-section">
          <p className="about-section-title">이메일_</p>
          <p>w0_0ss@naver.com</p>
        </div>
      </div>
      <div className="about-history">
        <p className="about-title">학력</p>
        <div className="about-section">
          <p className="about-section-title">2016.02</p>
          <p>선린인터넷고등학교 멀티미디어과 졸업.</p>
        </div>
      </div> */
