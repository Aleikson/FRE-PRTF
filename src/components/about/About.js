import React from 'react';
import styles from './About.module.css';
import CV from '../../assets/CV.pdf'

function About() {

    const handleButton = () => {
        window.open(CV, '_blank');
      }

    return (
        <div id='about' className={styles.about}>
            <div className={styles.left}>
                <h1>About me</h1>
                <p>Hello, I am Aleikson, a passionate frontend developer and UI designer. With extensive UX/UI experience gained through freelance projects and volunteer work, I am constantly seeking innovation in every aspect of my development.</p>
                <p>My journey in web development as a freelancer has allowed me to acquire strong skills and practical experience in creating engaging and functional user interfaces. Working independently has challenged me to find creative solutions to client problems and continuously improve my skill set.</p>
                <a href='/' className='primary-btn-global' onClick={handleButton}>View my CV</a>
            </div>
            <div className={styles.right}>
                <div className={styles.column}>
                    <h1>Development</h1>
                    <p>
                        I specialize in website development, using React and CSS, always with a strong commitment to optimization and writing clean code.
                        Additionally, I have experience in using PHP as a tool to create custom pages in WordPress.
                    </p>
                </div>
                <div className={styles.column}>
                    <h1>Design</h1>
                    <p>
                        I have a deep interest and experience in UX/UI. When creating user interfaces, my approach focuses on providing the best possible user experience.
                        This includes thorough research, creating wireframes and prototypes, and implementing designs with attention to detail, always aiming for usability and aesthetics.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
