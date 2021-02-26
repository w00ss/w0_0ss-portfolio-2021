import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';
import { ReactComponent as Back } from './back.svg';
import { ReactComponent as Forward } from './forward.svg';

function ImageSlider({ data }) {
  const slider = useRef();
  const [currentImage, setCurrentImage] = useState(1);
  const maxImage = data.images.length;

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
    slider.current.style.transform = `translateX(-${
      (100 / maxImage) * (currentImage - 1)
    }%)`;
  }, [currentImage]);

  return (
    <div className="image-slider-container">
      <div className="slider-count">
        {currentImage}/{maxImage}
      </div>

      <div className="slider-btns">
        {currentImage !== 1 && (
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

      <div
        ref={slider}
        className="image-slider"
        style={{ width: `${maxImage}00%` }}
      >
        {data.images.map((image) => (
          <div key={image} className="slider-image">
            <img
              src={`${process.env.PUBLIC_URL}/image/${data.title}/${image}.png`}
              alt={`${data.title}-${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

{
  /* <div className="image-slider">
<div className="slider-count">
  {currentImage}/{maxImage}
</div>
<div className="slider-btns">
  {currentImage !== 1 && (
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
  <div className="slider-image left-image">
    <img
      alt={`${data.title}_1`}
      src={`${process.env.PUBLIC_URL}/image/${data.title}/1.png`}
    />
  </div>
  <div className="slider-image right-image">
    <img
      alt={`${data.title}_2`}
      src={`${process.env.PUBLIC_URL}/image/${data.title}/2.png`}
    />
  </div>
</div>
</div> */
}
