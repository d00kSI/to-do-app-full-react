import React from 'react';

const Form = ({ onSubmit, className, children }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;