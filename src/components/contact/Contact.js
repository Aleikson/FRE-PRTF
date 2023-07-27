import React from 'react';
import Style from './Contact.module.css';

const Contact = () => {

  return (
    <div id='contact' className={Style.container}>
      <div className={Style.containerGrid}>
        <div className={Style.item}>
          <h3>In need of a designer/developer?</h3>
          <p> I’m currently available for work.</p>
          <a href='/' className={Style.btn1}>Send a message</a>
        </div>
        <div className={Style.linksContainer}>
          <a href='/' >+55 (99) 98455-7469</a>
          <a href='/' >aleiksonsilva@hotmail.com</a>
        </div>
      </div>
    </div>
  );

};

export default Contact;