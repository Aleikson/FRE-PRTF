import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


import Style from './Footer.module.css';

const Footer = () => {
  const authorName = 'Aleikson';

  return (
    <div className={Style.footerContainer}>
      <div className={Style.titleContainer}>
        <span className={Style.title}>Embracing challenges and overcoming obstacles daily.</span>
      </div>
      <div className={Style.socialContainer}>
        <div className={Style.socialContent}>
          <div className={Style.socialLinks}>
            <a href="https://github.com/Aleikson">
              <FaGithub className={Style.contactIcon} size={25} />
            </a>
            <a href="https://www.linkedin.com/in/aleikson-frontend/">
              <FaLinkedinIn className={Style.contactIcon} size={25} />
            </a>
            <a href="mailto:aleiksonsilva@hotmail.com" >
              <AiOutlineMail className={Style.contactIcon} size={25} />
            </a>
          </div>
        </div>
      </div>
      <p className={Style.footerText}> Handcrafted by me &copy; {authorName} - All rights reserved</p>
    </div>
  );
};

export default Footer;