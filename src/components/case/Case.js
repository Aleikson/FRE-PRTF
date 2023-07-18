import React from 'react';
import Style from './Case.module.css';

const Case = ({ title, description, list, image, page }) => {
  return (
    <div id='case' className={Style.container}>
      <div className={Style.imgContent}>
        <div className={Style.imgContainer}>
          <img className={Style.imgProject} src={image} alt="" />
        </div>
        <div className={Style.content}>
          <div className={Style.leftContent}>
            <h3 className={Style.title}>{title}</h3>
            <ul className={Style.list}>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className={Style.btnContainer}>
              <a className={Style.link} href={page} target="_blank" rel="noopener noreferrer">
                Ver Página
              </a>
            </div>
          </div>
          <div className={Style.rightContent}>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
