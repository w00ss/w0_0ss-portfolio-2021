import React, { useEffect, useRef } from 'react';
import ImageSlider from './ImageSlider';
import { ReactComponent as Close } from './close.svg';
import { ReactComponent as Github } from './icon_github.svg';

function Project({ data, onClick }) {
  const page = useRef();
  useEffect(() => {
    page.current.classList.add('open', 'open-page');
  }, []);

  return (
    <div ref={page} className="page-container">
      <div className="page-title">
        <h2>{data.title}</h2>
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
        <ImageSlider data={data} />
      </div>

      <div className="use page-section">
        {data.use.map((current, i) => (
          <div className="used" key={i}>
            {current}
          </div>
        ))}
      </div>

      <div className="page-section">
        {data.desc.split('//').map((current, i) => (
          <p key={i}>{current}</p>
        ))}
      </div>

      <div className="date page-section">
        <p>{data.date}</p>
      </div>

      <div className="page-section">
        <a
          className="project-link"
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>
    </div>
  );
}

export default Project;
