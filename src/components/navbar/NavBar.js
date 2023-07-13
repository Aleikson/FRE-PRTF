import React, { useState } from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className={style.container}>
      <a href="/" className={style.nameLink}>
        <h1>Aleikson Silva</h1>
        <span>&#124; front end developer</span>
      </a>
      <div className={`${style.links} ${isMenuOpen ? style.open : style.closed}`}>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#case" onClick={handleLinkClick}>Case Studies</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
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
