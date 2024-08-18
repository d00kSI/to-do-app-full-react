import React from 'react';

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  required = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      required={required}
    />
  );
};

export default Input;