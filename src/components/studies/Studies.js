import React from 'react';
import Style from './Studies.module.css';
import project1 from '../../assets/1.png';
import project2 from '../../assets/2.png';
import project3 from '../../assets/3.png';

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
    link: ''
  },
];

const Studies = () => {
  return (
    <div className={Style.container}>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1 className={Style.firstTitle}>Case Studies</h1>
        <p className={Style.firstDescription}>Creating visually pleasing, user-centric, and intuitive prototypes, digital products (such as apps and websites), and design systems.</p>
      </div>
      <div className={Style.tiles}>
        {data.map((data) => (
          <div className={Style.tile} key={data.id}>
            <div id='case' className={Style.content}>
              <a
                href={data.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={data.image} alt={`Project ${data.id}`} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studies;