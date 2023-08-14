import React, { useState } from 'react';
import Style from './Studies.module.css';
import project1 from '../../assets/1.png';
import project2 from '../../assets/2.png';
import project3 from '../../assets/3.png';
import fullProject3 from '../../assets/fullProject3.png'; // Import the additional image

const data = [
  {
    id: 1,
    image: project1,
    link: 'https://cupcake-palace.vercel.app/',
  },
  {
    id: 2,
    image: project2,
    link: 'https://plan-note.vercel.app/',
  },
  {
    id: 3,
    image: project3,
    additionalImage: fullProject3,
    fullImageLink: fullProject3, // Link to open the full image in a new tab
  },
];

const Tile = ({ data }) => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    if (data.fullImageLink) {
      window.open(data.fullImageLink, '_blank');
    } else {
      setOpen((prevState) => !prevState);
    }
  };

  const tileStyle = {
    width: open ? '62vw' : '25vw',
    height: open ? '62vw' : '25vw',
    position: open ? 'absolute' : 'static',
    top: open ? '50%' : 'auto',
    left: open ? '50%' : 'auto',
    marginTop: open ? '-31vw' : '0',
    marginLeft: open ? '-31vw' : '0',
    boxShadow: open ? '0 0 40px 5px rgba(0, 0, 0, 0.3)' : 'none',
    transform: open ? 'none' : hover ? 'scale(1.1)' : 'none',
  };

  const content = (
    <div className={Style.content} onClick={handleClick}>
      {open && data.additionalImage ? (
        <img src={data.additionalImage} alt={`Full Project`} />
      ) : (
        <a
          href={data.link}
          target={data.fullImageLink ? '_blank' : '_self'}
          rel={data.fullImageLink ? 'noopener noreferrer' : ''}
        >
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src={data.image}
            alt={`Project ${data.id}`}
            style={tileStyle}
          />
        </a>
      )}
    </div>
  );

  return <div className={Style.tile}>{content}</div>;
};

const Tiles = ({ data }) => {
  return (
    <div className={Style.container}>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1 className={Style.firstTitle}>Case Studies</h1>
        <p className={Style.firstDescription}>Creating visually pleasing, user-centric, and intuitive prototypes, digital products (such as apps and websites), and design systems.</p>
      </div>
      <div className={Style.tiles}>
        {data.map((data) => (
          <Tile data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

const Studies = () => {
  return <Tiles data={data} />;
};

export default Studies;