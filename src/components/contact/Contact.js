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
        <div className={Style.iconContainer}>
          <a href='/' > +316 57 041 097</a>
          <a href='/' >hi@rubenkuipers.design</a>
        </div>
      </div>
    </div>
  );

};

export default Contact;