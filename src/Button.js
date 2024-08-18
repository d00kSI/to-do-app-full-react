import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, text, className, size = 'lg', onClick, type = 'button' }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
};

export default Button;