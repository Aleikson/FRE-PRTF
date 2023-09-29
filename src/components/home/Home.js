import React from 'react';
import Style from './Home.module.css';

const Home = () => {
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id='home' className={Style.home}>
      <div className={Style.content}>
        <div className={Style.title}>
          <h1>Hello I'm <span>Aleikson Silva</span></h1>
          <h1>Frontend Developer & UI designer</h1>
        </div>
        <div className={Style.listContainer}>
          <a
            href='#studies'
            onClick={(e) => handleSmoothScroll(e, 'studies')}
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;