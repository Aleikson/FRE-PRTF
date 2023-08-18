import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import Style from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const authorName = 'Aleikson';

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={Style.footerContainer}>
      <div className={Style.socialAndNavigationContainer}>
        <nav className={Style.navigationLinks}>
          <span className={Style.navigationTitle}>Navigation</span>
          <a href="/" onClick={(e) => handleSmoothScroll(e, 'home')}>
            Home
          </a>
          <a href="#case" onClick={(e) => handleSmoothScroll(e, 'case')}>
            Case
          </a>
          <a href="#capabilities" onClick={(e) => handleSmoothScroll(e, 'capabilities')}>
            Capabilities
          </a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
            Contact
          </a>
        </nav>
        <div className={Style.contactContainer}>
          <div className={Style.socialLinks}>
            <a href="https://github.com/Aleikson">
              <FaGithub className={Style.contactIcon} />
              <span className={Style.contactText}>github.com/Aleikson</span>
            </a>
            <a href="https://www.linkedin.com/in/aleikson-frontend/">
              <BsLinkedin className={Style.contactIcon} />
              <span className={Style.contactText}>linkedin.com/in/aleikson</span>
            </a>
          </div>
        </div>
      </div>
      <p className={Style.footerText}>&copy; {currentYear} {authorName} - All rights reserved</p>
    </div>
  );
};

export default Footer;
