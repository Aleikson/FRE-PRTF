import React from 'react';
import Style from './Skills.module.css';
import { FaReact } from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandTypescript, TbBrandBootstrap } from 'react-icons/tb';
import { MdOutlineHtml, MdOutlineCss } from 'react-icons/md';
import { BiGitBranch } from 'react-icons/bi';
import { SiFirebase, SiStyledcomponents, SiFigma } from 'react-icons/si';

const Skills = () => {
  const icons = [
    { icon: MdOutlineHtml, name: 'HTML' },
    { icon: MdOutlineCss, name: 'CSS' },
    { icon: IoLogoJavascript, name: 'JavaScript'},
    { icon: BiGitBranch, name: 'Git' },
    { icon: FaReact, name: 'React' },
    { icon: TbBrandTypescript, name: 'TypeScript' },
    { icon: TbBrandBootstrap, name: 'Bootstrap' },
    { icon: SiFirebase, name: 'Firebase' },
    { icon: SiFigma, name: 'Figma' },
    { icon: DiJqueryLogo, name: 'jQuery' },
    { icon: SiStyledcomponents, name: 'Styled Components' },
  ];

  return (
    <div id='skills' className={Style.container}>
      <div className={Style.containerGrid}>
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className={Style.item}>
              <div className={Style.iconContainer}>
                <IconComponent />
              </div>
            </div>
          );
        })}
      </div>
      <p>
        I create <span style={{ '--tw-text-opacity': 1, color: 'rgba(0, 98, 255, var(--tw-text-opacity))' }}>effective</span> and <span style={{ '--tw-text-opacity': 1, color: 'rgba(0, 98, 255, var(--tw-text-opacity))' }}>high-performing</span> Pages, using <span style={{ '--tw-text-opacity': 1, color: 'rgba(0, 98, 255, var(--tw-text-opacity))' }}>modern technologies</span> to <span style={{ '--tw-text-opacity': 1, color: 'rgba(0, 98, 255, var(--tw-text-opacity))' }}>engage</span> and <span style={{ '--tw-text-opacity': 1, color: 'rgba(0, 98, 255, var(--tw-text-opacity))' }}>convert</span> the target audience.
      </p>
    </div>
  );
  
};

export default Skills;