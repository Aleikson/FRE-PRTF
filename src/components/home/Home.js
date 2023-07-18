import React from 'react';
import Style from './Home.module.css';
import CaseObject from '../case/CaseObject';

const Home = () => {
  return (
    <div className={Style.home}>
      <div className={Style.content}>
        <div className={Style.role}>
          <h1>I’m a Front-End Web Developer</h1>
        </div>
        <div className={Style.description}>
          <p><span style={{fontWeight: 'bold'}}>Experienced</span> in turning ideas into reality,</p>
          <p><span style={{fontWeight: 'bold'}}>bringing your vision to the digital world.</span></p>
        </div>
      </div>
      <CaseObject />
    </div >
  );
};

export default Home;
