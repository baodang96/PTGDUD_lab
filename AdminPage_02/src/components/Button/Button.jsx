import React from 'react';
import './Button.css';

const Button = ({ label, icon, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <img src={icon} alt="#" className="button-icon"/>
      <span>{label}</span>
    </button>
  );
};

export default Button;