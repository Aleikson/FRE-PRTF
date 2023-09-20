import React from 'react';
import Style from './Contact.module.css';

const Contact = () => {

  return (
    <div id='contact' className={Style.container}>
      <div className={Style.containerFlex}>
        <div className={Style.item}>
          <h3>Start a project</h3>
        </div>
        <div>
          <p>Interested in my skills? Get in touch with me, and let's have a conversation.</p>
        </div>
        <div className={Style.linksContainer}>
          <a href="mailto:aleiksonsilva@hotmail.com" className={Style.btnGlobal}>Send me a message</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;