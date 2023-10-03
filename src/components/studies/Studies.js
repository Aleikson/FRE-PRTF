import React, { useState } from 'react';
import Style from './Studies.module.css';
import project1 from '../../assets/1.png';
import project2 from '../../assets/2.png';
import project3 from '../../assets/3.png';
import project4 from '../../assets/4.png'
import project3full from '../../assets/fullProject3.png'
import project4Full from '../../assets/fullProject4.png'

const data = [
  {
    id: 1,
    image: project1,
    link: 'https://cupcake-palace.vercel.app/',
    description: 'High-quality e-commerce for a cupcake bakery.',
    type: 'Site'
  },
  {
    id: 2,
    image: project2,
    link: 'https://plan-note.vercel.app/',
    description: 'Web application designed to enhance your daily productivity.',
    type: 'Site'
  },
  {
    id: 3,
    image: project3,
    link: project3full,
    description: 'Modern design for a beachfront hotel.',
    type: 'Design'
  },
  {
    id: 4,
    image: project4,
    link: project4Full,
    description: 'Modern design for your hamburger restaurant',
    type: 'Design'
  }
];

const Studies = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredDescription, setHoveredDescription] = useState(null);

  const handleMouseEnter = (projectId, projectDescription) => {
    setHoveredProject(projectId);
    setHoveredDescription(projectDescription);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
    setHoveredDescription(null);
  };

  return (
    <div className={Style.container}>
      <div className={Style.textContainer} style={{ textAlign: 'center', margin: '20px' }}>
        <h1>My Recent Work</h1>
        <p>Here are a few past design projects I've worked on.</p>
      </div>
      <div className={Style.grid}>
        {data.map((project) => (
          <div
            className={`${Style.tile} ${hoveredProject === project.id ? Style.hovered : ''}`}
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id, project.description)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={Style.overlay}>
              <p className={Style.overlayDescription}>{hoveredProject === project.id ? hoveredDescription : ''}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={Style.overlayButton}>
                  {project.type === 'Site' ? 'Visit Site' : 'See Design'}
                </a>
              )}
            </div>
            <img src={project.image} alt={`Project ${project.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studies;