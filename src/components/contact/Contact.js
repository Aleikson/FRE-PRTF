import React, { useEffect, useRef } from 'react';
import Style from './Contact.module.css';

const Contact = () => {
  const ribbonRef = useRef(null);

  useEffect(() => {
    const textToRepeat = "Let's Talk ++ ";

    const numberOfRepetitions = 100;

    const span = document.createElement('span');
    span.textContent = textToRepeat;

    if (ribbonRef.current) {
      for (let i = 0; i < numberOfRepetitions; i++) {
        const spanClone = span.cloneNode(true);
        ribbonRef.current.appendChild(spanClone);
      }
    }
  }, []);

  return (
    <>
      <div className={Style.ribbon}>
        <div className={Style.ribbonText} ref={ribbonRef}>
        </div>
      </div>
      <div id='contact' className={Style.container}>

        <div className={Style.content}>
          <p>Working on a project?</p>
          <div className={Style.item}>
            <h3>I'll make your website look great!</h3>
          </div>
          <div>
            <p>I offer website design and development services.</p>
          </div>
          <div className={Style.linksContainer}>
            <a href="mailto:aleiksonsilva@hotmail.com" className={Style.btnGlobal}>GET IN TOUCH</a>
          </div>
        </div>
      </div>
    </>

  );
};

export default Contact;