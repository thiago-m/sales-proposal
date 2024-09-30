import React from 'react';
import './index.scss'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: any;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <button type="submit" disabled={disabled} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;