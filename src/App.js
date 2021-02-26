import React, { useState } from 'react';
import Header from './component/Header';
import Intro from './component/Intro';
import ProjectList from './component/ProjectList';
import Modal from './component/Modal';

function App() {
  const [modal, setModal] = useState(false);
  const [currentData, setCurrentData] = useState();

  const toggleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  const getCurrent = (data) => {
    setCurrentData(data);
  };

  return (
    <>
      <Header />
      <main>
        <Intro
          onClick={() => {
            toggleModal();
            getCurrent('about');
          }}
        />
        <ProjectList
          onClick={(data) => {
            toggleModal();
            getCurrent(data);
          }}
        />
      </main>
      {modal && <Modal onClick={toggleModal} data={currentData} />}
    </>
  );
}

export default App;
