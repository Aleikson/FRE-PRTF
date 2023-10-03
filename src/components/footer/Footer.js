import React, { useState } from 'react';
import styles from './Footer.module.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';

function Footer() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://formspree.io/f/xaygljqo',
        {
          method: 'POST',
          body: new FormData(e.target),
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (response.ok) {
        setShowSuccessMessage(true);
      } else {
        console.error('Error submitting the form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <h3>
          Aleikson <span>Developer</span>
        </h3>
        <p className={styles.footerLinks}>
          <a href="/">Home</a> · <a href="#about">About</a> · <a href="#studies">Work</a> · <a href="#contact">Contact</a>
        </p>
        <p className={styles.footerCompanyName}> Handcrafted by me &copy; Aleikson - All rights reserved</p>
        <div className={styles.footerIcons}>
          <a href="mailto:aleiksonsilva@hotmail.com">
            <AiOutlineMail />
          </a>
          <a href="https://wa.me/5599984557469">
            <AiOutlineWhatsApp />
          </a>
          <a href="https://www.linkedin.com/in/aleikson-frontend/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Aleikson">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className={styles.footerRight}>
        <p>Contact Me</p>
        <form
          className={styles.footerForm}
          action="https://formspree.io/f/xaygljqo"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
        {showSuccessMessage && (
          <div className={styles.successMessage}>
            Thank you! Your form has been successfully submitted.
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;