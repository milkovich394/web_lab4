import React from 'react';
import exceedData from '../mockData/exceedData'; 
import img1 from '../assets/img/exceeding_all_expectations.png';

export const LeftTemplate = ({ img }) => {
    const { alt } = img;
    return (
      <div className="exceeding_all_expectations__left">
        <img src={img} alt={alt} />
      </div>
    );
  };
  

export const RightTemplate = ({ title, header, content, link }) => {
  return (
    <div className="exceeding_all_expectations__right">
      <p className="right__cta">{title}</p>
      <h2 className="left__header">{header}</h2>
      <p className="container__content">{content}</p>
      <a href={link.href} className="left__cta">{link.text}</a>
    </div>
  );
};


const Exceed = () => {
  const { title, img, header, content, link } = exceedData;

  return (
    <div className="exceeding_all_expectations">
      <LeftTemplate img={img1} />
      <RightTemplate title={title} header={header} content={content} link={link} />
    </div>
  );
};

export default Exceed;