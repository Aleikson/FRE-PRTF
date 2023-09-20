import React, { useState } from 'react';
import Style from './Studies.module.css';
import project1 from '../../assets/1.png';
import project2 from '../../assets/2.png';
import project3 from '../../assets/3.png';
import coming from '../../assets/soon.png';
import project3full from '../../assets/fullProject3.png'

const data = [
  {
    id: 1,
    image: project1,
    link: 'https://cupcake-palace.vercel.app/',
    description: 'High-quality e-commerce for a cupcake bakery.',
  },
  {
    id: 2,
    image: project2,
    link: 'https://plan-note.vercel.app/',
    description: 'Web application designed to enhance your daily productivity.',
  },
  {
    id: 3,
    image: project3,
    link: project3full,
    description: 'Modern design for a beachfront hotel.',
  },
  {
    id: 4,
    image: coming,
    link: '',
    description: '',
  },
  {
    id: 5,
    image: coming,
    link: '',
    description: '',
  },
  {
    id: 6,
    image: coming,
    link: '',
    description: '',
  },
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
                  Visit Website
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
