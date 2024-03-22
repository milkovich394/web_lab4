import React from 'react';
import registrationData from '../mockData/registrationData';

export const RegistrationLeftTemplate = ({ title, header }) => (
  <div className="registration__left">
    <p className="right__cta">{title}</p>
    <h3 className="registration__left__content">{header}</h3>
  </div>
);

export const RegistrationRightTemplate = ({ button }) => (
  <div className="registration__right">
    <a href={button.href}><button className="registration_buttons__start btn">{button.text}</button></a>
  </div>
);

const Registration = () => {
  const { title, header, button } = registrationData;

  return (
    <section className="section registration">
      <RegistrationLeftTemplate title={title} header={header} />
      <RegistrationRightTemplate button={button} />
    </section>
  );
};

export default Registration;