import React from 'react';
import './index.scss'

interface LabelProps {
  text: string;
  children?: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ text, children }) => {
  return <label className="label">{text} {children}</label>;
};

export default Label;