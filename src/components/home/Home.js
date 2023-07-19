import React from 'react';
import Style from './Home.module.css';
import CaseObject from '../case/CaseObject';

const Home = () => {
  return (
    <div className={Style.home}>
      <div className={Style.content}>
        <div className={Style.title}>
          <h1>I’m a Front-End Web Developer</h1>
        </div>
        <div className={Style.description}>
          <p>Experienced in creating responsive and intuitive websites, with a focus on usability and accessibility.</p>
          <p>Helping people turn their ideas into successful digital projects.</p>
        </div>
      </div>
      <CaseObject />
    </div >
  );
};

export default Home;
