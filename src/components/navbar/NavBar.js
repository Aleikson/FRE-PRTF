import React, { useState } from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [areLinksVisible, setLinksVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setLinksVisibility(!areLinksVisible);
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
        <div className={style.menuIcon} onClick={toggleMenu}>
          <span className={`${style.iconBar} ${isMenuOpen ? style.open : ''}`} />
          <span className={`${style.iconBar} ${isMenuOpen ? style.open : ''}`} />
        </div>
        <div className={`${style.links} ${isMenuOpen ? style.open : style.closed}`}>
          {areLinksVisible && (
            <>
              <a
                href="#studies"
                onClick={(e) => handleSmoothScroll(e, 'case')}>My Work</a>
              <div>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact Me</a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
