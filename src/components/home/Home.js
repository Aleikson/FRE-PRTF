import React from 'react';
import Style from './Home.module.css';


const Home = () => {
  return (
    <div id='home' className={Style.home}>
      <div className={Style.content}>
        <div className={Style.title}>
          <h1>Hello I'm <span>Aleikson Silva</span></h1>
          <h1>Frontend Developer & UI designer</h1>
        </div>
        <div className={Style.listContainer}>
          <a href='#studies'>View My Work</a>
        </div>
      </div>
    </div >
  );
};

export default Home;
