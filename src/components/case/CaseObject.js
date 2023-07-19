import React from 'react';
import Case from './Case';
import project1 from '../../assets/case1.png';
import project2 from '../../assets/case2.png';

const CaseObject = () => {
  const projects = [
    {
      title: 'Cupcake Palace',
      description: ['This project is an e-commerce simulation of a cupcake store developed using JavaScript, ReactJS, and CSS. The website includes a navigation bar, home page, shopping page, and cart with prices.'],
      list: [
        '- Responsive design',
        '- Attractive interface',
        '- Fast performance'
      ],
      image: project1,
      page: 'https://cupcake-palace.vercel.app/'
    },
    {
      title: 'Productivity Website',
      description: ['This project is a productivity website that allows users to add notes and tasks to manage their daily activities. It was developed using JavaScript, ReactJS, CSS, and Firebase. Notes are saved locally in the users browser using LocalStorage, while the task list is stored in Firebase.'],
      list: [
        '- Responsive design',
        '- Attractive interface',
        '- Firebase cloud storage'
      ],
      image: project2,
      page: 'https://plan-note.vercel.app/'
    }
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <Case
            title={project.title}
            description={project.description}
            list={project.list}
            image={project.image}
            reverse={index % 2 !== 0}
          />
        </div>
      ))}
    </div>
  );
};

export default CaseObject;
