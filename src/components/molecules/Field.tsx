import React from 'react';
import Label from '../atoms/Label/index.tsx';
import Input from '../atoms/Input/index.tsx';
import './Field.scss'

interface LabelProps {
  label: string
  error: string
  value: string
  type: string
  options?: Array<string>
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const Field: React.FC<LabelProps> = ({ label, error, value, type, options, placeholder, onChange }) => {
  if(type === 'select') return (
    <div className='field'>
      <Label text={label}>
        <select
          value={value}
          onChange={onChange}
        >
          {options?.map(option => (
            <option value={option} key={option}>{option}</option>
          ))}
          </select>
      </Label>
    {error && <p className="error">{error}</p>}
    </div>
  )
  
  return (
    <div className='field'>
      <Label text={label}>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Label>
    {error && <p className="error">{error}</p>}
    </div>
  )
};

export default Field;