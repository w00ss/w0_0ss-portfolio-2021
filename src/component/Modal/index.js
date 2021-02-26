import React, { useEffect, useRef } from 'react';
import About from './AboutModal';
import Project from './ProjectModal';
import './Modal.css';

function Modal({ data, onClick }) {
  const bg = useRef();
  const bgCloseEffect = (page) => {
    bg.current.classList.remove('open');
    bg.current.classList.add('close');
    page && pageCloseEffect(page);
    setTimeout(onClick, 500);
  };
  const pageCloseEffect = (page) => {
    page.current.classList.remove('open', 'open-page');
    page.current.classList.add('close');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    bg.current.classList.add('open');
    return () => {
      document.body.removeAttribute('style');
    };
  }, []);

  return (
    <div className="modal">
      <div className="background" ref={bg} />
      {data === 'about' ? (
        <About
          onClick={(page) => {
            bgCloseEffect(page);
          }}
        />
      ) : (
        <Project
          onClick={(page) => {
            bgCloseEffect(page);
          }}
          data={data}
        />
      )}
    </div>
  );
}

export default Modal;
