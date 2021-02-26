import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Close } from './close.svg';
import { ReactComponent as Back } from './back.svg';
import { ReactComponent as Forward } from './forward.svg';
import { ReactComponent as Github } from './icon_github.svg';

function Project({ data, onClick }) {
  const slider = useRef();
  const [currentImage, setCurrentImage] = useState(0);
  const maxImage = data.image.length - 1;

  const prevBtn = () => {
    if (currentImage !== 0) {
      setCurrentImage(currentImage - 1);
    }
  };
  const nextBtn = () => {
    if (currentImage !== maxImage) {
      setCurrentImage(currentImage + 1);
    }
  };

  useEffect(() => {
    slider.current.style.transform = `translateX(-${currentImage}00%)`;
  }, [currentImage]);

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
        <div className="image-slider">
          <div className="slider-count">
            {currentImage + 1}/{maxImage + 1}
          </div>
          <div className="slider-btns">
            {currentImage !== 0 && (
              <button className="prev" type="button" onClick={prevBtn}>
                <Back />
              </button>
            )}
            {currentImage !== maxImage && (
              <button className="next" type="button" onClick={nextBtn}>
                <Forward />
              </button>
            )}
          </div>
          <div ref={slider} className="slider">
            {data.image.map((current) => (
              <img
                key={current}
                alt={`${data.title}_${current}`}
                src={`${process.env.PUBLIC_URL}/image/${data.title}/${current}.png`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="use page-section">
        {data.use.map((current) => (
          <div className="used">{current}</div>
        ))}
      </div>

      <div className="page-section">
        {data.desc.split('//').map((current) => (
          <p>{current}</p>
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
