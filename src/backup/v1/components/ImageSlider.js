import React, { useState, useEffect, useRef } from 'react';
import { icons } from '../icons';
import './ImageSlider.css';

function ImageSlider({ data }) {
  const totalSlide = data.imgs[data.imgs.length - 1] - 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.3s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <button className="slider-btn prev" onClick={prevSlide}>
        {icons.arrowLeft()}
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        {icons.arrowRight()}
      </button>

      <div className="slider" ref={slideRef}>
        {data.imgs.map((img) => (
          <img
            key={img}
            className="slider-img"
            src={`${process.env.PUBLIC_URL}/image/${data.title}/${img}.jpg`}
            alt={`${data.title}-${img}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
