import React, { useState, useEffect } from 'react';
import Style from './Contact.module.css';

const Contact = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkingInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkingInterval);
  }, []);

  return (
    <div id='contact' className={Style.container}>
      <div className={Style.containerFlex}>
        <div className={Style.item}>
          <h3>In need of a front-end developer?</h3>
          <div className={Style.availabilityContainer}>
            <div className={Style.blinkingCircle} style={{ opacity: isBlinking ? 1 : 0 }}></div>
            <p>I’m currently available for work.</p>
          </div>
          <a href='/' className={Style.btn1}>Send a message</a>
        </div>
        <div className={Style.linksContainer}>
          <a className={Style.contactItem} href="https://wa.me/5599984557469">
            <span>+55 (99) 98455-7469</span>
          </a>
          <a className={Style.contactItem} href="mailto:aleiksonsilva@hotmail.com">
            <span>aleiksonsilva@hotmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
