import React from 'react';
import './Label.css';

const Label = ({ icon, text }) => {
  return (
    <div className="custom-label">
      <img src={icon} alt="#" className="label-icon"/>
      <span className="label-text">{text}</span>
    </div>
  );
};

export default Label;