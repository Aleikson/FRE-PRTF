import React from 'react';
import Style from './Case.module.css';

const Case = ({ image, page }) => {
  return (
    <div id='case' className={Style.container}>
      <div className={Style.imgContent}>
        <div className={Style.imgContainer}>
          <a href={page}>
            <img className={Style.imgProject} src={image} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Case;