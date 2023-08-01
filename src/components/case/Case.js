import React from 'react';
import Style from './Case.module.css';

const Case = ({ title, description, list, image, reverse }) => {
  const imgContentClass = reverse ? `${Style.imgContent} ${Style.reverse}` : Style.imgContent;

  return (
    <div id='case' className={Style.container}>
      {reverse ? null : (
        <>
          <h1 className={Style.firstTitle}>Case Studies</h1>
          <p className={Style.firstDescription}>Creating visually pleasing, user-centric, and intuitive prototypes, digital products (such as apps and websites), and design systems.</p>
        </>
      )}
      <div className={imgContentClass}>
        <div className={Style.imgContainer}>
          <img className={Style.imgProject} src={image} alt="" />
          <div className={Style.content}>
            <div className={Style.itemContent}>
              <h3 className={Style.title}>{title}</h3>
              <ul className={Style.list}>
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;