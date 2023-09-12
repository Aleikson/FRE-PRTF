import React from 'react';
import Style from './Home.module.css';
import Skills from '../skills/Skills'

const Home = () => {
  return (
    <div id='home' className={Style.home}>
      <div className={Style.content}>
        <div className={Style.title}>
          <h1>I’m a Front-End Web Developer & UI designer</h1>
        </div>
        <div className={Style.description}>
          <p>Experienced in creating responsive and intuitive websites, with a focus on usability and accessibility.</p>
          <p>Helping people turn their ideas into successful digital projects.</p>
        </div>
        <div className={Style.btnContainer}>
          <a href='#case' className='primary-btn-global'>View my work</a>
          <a href='#capabilities' className='secondary-btn-global'>more about me</a>
        </div>
      </div>
      <Skills />
    </div >
  );
};

export default Home;
