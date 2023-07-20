import React from 'react';
import Style from './Capabilities.module.css';
import DesignSvg from '../../assets/svgs/design.svg';
import PerformanceSvg from '../../assets/svgs/performance.svg';
import DeveloperSvg from '../../assets/svgs/developer.svg';

const Capabilities = () => {
  const icons = [
    {
      icon: DesignSvg,
      name: 'Product Design',
      description: ['User Interface Design', 'Visual Design', 'Visual Identities', 'Responsive & Mobile Websites']
    },
    {
      icon: PerformanceSvg,
      name: 'Performance',
      description: [' JavaScript lazy loading', 'Code splitting', ' Conditional loading', ' Responsive image optimization']
    },
    {
      icon: DeveloperSvg,
      name: 'Development',
      description: ['Front-end development', 'Responsive & Mobile Websites', 'CSS Animations', 'React Development']
    },
  ];

  return (
    <div id='capabilities' className={Style.container}>
      <h2 className={Style.title}>Capabilities</h2>
      <div className={Style.containerGrid}>
        {icons.map((item, index) => (
          <div key={index} className={Style.item}>
            <div className={Style.iconContainer}>
              <img className={Style.icon} src={item.icon} alt={item.name} />
            </div>
            <h3 className={Style.name}>{item.name}</h3>
            {item.description && item.description.length > 0 && (
              <ul className={Style.list}>
                {item.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capabilities;
