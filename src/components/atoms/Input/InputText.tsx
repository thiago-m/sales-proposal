import React from 'react';
import Input from './index.tsx'

const InputText = ({ label, value, onChange }) => (
  <div>
    <label className='bold font-1-9'>{label}</label>
    <Input type="text" value={value} onChange={onChange} />
  </div>
);

export default InputText;
