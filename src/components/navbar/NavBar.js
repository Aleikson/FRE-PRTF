import React, { useState } from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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
    <div className={style.container}>
      <div className={style.content}>
        <div className={`${style.links} ${isMenuOpen ? style.open : ''}`}>
          <a
            style={{ color: '#ececec' }}
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
          >
            About
          </a>
          <a
            style={{ color: '#ececec' }}
            href="#studies"
            onClick={(e) => handleSmoothScroll(e, 'studies')}
          >
            My Work
          </a>
          <div className={style.contact}>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className={style.menuIcon} onClick={toggleMenu}>
          <span className={style.iconBar} />
          <span className={style.iconBar} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;