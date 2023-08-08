import React from 'react';
import Case from './Case';
import Style from './Case.module.css';
import project1 from '../../assets/case1.png';
import project2 from '../../assets/case2.png';
import project3 from '../../assets/Hotel.png';

const CaseObject = () => {
  const projects = [
    {
      image: project1,
      page: 'https://cupcake-palace.vercel.app/'
    },
    {
      image: project2,
      page: 'https://plan-note.vercel.app/'
    },
    {
      image: project3,
      page: '/'
    }
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1 className={Style.firstTitle}>Case Studies</h1>
        <p className={Style.firstDescription}>Creating visually pleasing, user-centric, and intuitive prototypes, digital products (such as apps and websites), and design systems.</p>
      </div>
      <div className={Style.sideBySide}>
        {projects.map((project, index) => (
          <div key={index} className={Style.column}>
            <Case image={project.image} page={project.page} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseObject;
