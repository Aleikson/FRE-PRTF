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
      <a href="/" className={style.nameLink}>
        <h1>Aleikson Silva</h1>
        <span>&#124; front-end developer</span>
      </a>
      <div className={`${style.links} ${isMenuOpen ? style.open : style.closed}`}>
        <a href="#case" onClick={(e) => handleSmoothScroll(e, 'case')}>Case Studies</a>
        <a href="#capabilities" onClick={(e) => handleSmoothScroll(e, 'capabilities')}>Capabilities</a>
        <a
          style={{ '--tw-text-opacity': 1, color: 'rgba(0, 98, 255, var(--tw-text-opacity))' }}
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, 'contact')}
        >
          Contact
        </a>
      </div>
      <div className={style.menuIcon} onClick={toggleMenu}>
        <span className={`${style.iconBar} ${isMenuOpen ? style.open : ''}`} />
        <span className={`${style.iconBar} ${isMenuOpen ? style.open : ''}`} />
        <span className={`${style.iconBar} ${isMenuOpen ? style.open : ''}`} />
      </div>
    </div>
  );
};

export default NavBar;
