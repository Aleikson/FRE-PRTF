import React from 'react';
import styles from './About.module.css';
import CV from '../../assets/CV.pdf';

function About() {
    const handleButton = () => {
        window.open(CV, '_blank');
    }

    return (
        <div id='about' className={styles.about}>
            <div className={styles.left}>
                <h1>About me</h1>
                <p>
                    Hello, I am Aleikson, a passionate frontend developer and UI designer. With extensive
                    UX/UI experience gained through freelance projects and volunteer work, I am constantly
                    seeking innovation in every aspect of my development.
                </p>
                <p>
                    My journey in web development as a freelancer has allowed me to acquire strong skills and
                    practical experience in creating engaging and functional user interfaces. Working
                    independently has challenged me to find creative solutions to client problems and
                    continuously improve my skill set.
                </p>
                <a href='/' className='primary-btn-global' onClick={handleButton}>
                    View my CV
                </a>
            </div>
            <div className={styles.right}>
                <div className={styles.column}>
                    <h1>Development</h1>
                    <p>
                        I am focused on website development and am constantly learning. I have knowledge in a
                        variety of technologies, including{' '}
                        <span className={styles['development-tech']}>HTML</span>,{' '}
                        <span className={styles['development-tech']}>CSS</span>,{' '}
                        <span className={styles['development-tech']}>JavaScript</span>,{' '}
                        <span className={styles['development-tech']}>React</span>,{' '}
                        <span className={styles['development-tech']}>Bootstrap</span>,{' '}
                        <span className={styles['development-tech']}>Git</span>,{' '}
                        <span className={styles['development-tech']}>TypeScript</span>,{' '}
                        <span className={styles['development-tech']}>Firebase</span>,{' '}
                        <span className={styles['development-tech']}>Styled Components</span>, and{' '}
                        <span className={styles['development-tech']}>jQuery</span>. I always strive to optimize
                        and write clean code in my projects.
                        Additionally, as a freelancer, I use{' '}
                        <span className={styles['development-tech']}>PHP</span> to create custom pages in{' '}
                        <span className={styles['development-tech']}>WordPress</span>. This allows me to offer customized solutions to my clients, tailored to their
                        specific needs.
                    </p>
                </div>
                <div className={styles.column}>
                    <h1>Design</h1>
                    <p>
                        I have a deep interest and experience in UX/UI (User Experience/User Interface). When
                        creating user interfaces, my approach is centered around providing the best possible user
                        experience. This includes thorough research, creating wireframes and prototypes, and
                        implementing designs with a focus on detail, always aiming for usability and aesthetics.
                        To achieve this, I use tools such as{' '}
                        <span className={styles['design-tech']}>Figma</span>,{' '}
                        <span className={styles['design-tech']}>Mockit</span>, and{' '}
                        <span className={styles['design-tech']}>Photoshop</span>, which allow me to develop
                        impactful and functional designs.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;