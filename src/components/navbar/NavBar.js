import React, { useState } from 'react';
import style from './NavBar.module.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.container}>
      <a href="/" className={style.nameLink}>
        <h1>Aleikson Silva</h1>
        <span>&#124; front end developer</span>
      </a>
      <div className={`${style.links} ${isMenuOpen ? style.open : style.closed}`}>
        <Link to='/caseStudies'>About</Link>
        <Link to='/case'>Case Studies</Link>
        <a href="#contact">Contact</a>
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
