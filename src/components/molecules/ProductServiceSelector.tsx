import React from 'react';

interface ProductServiceSelectorProps {
  title: string
  items: Array<any>
  selectedItems: Array<any>
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const ProductServiceSelector: React.FC<ProductServiceSelectorProps> = ({ items, title, selectedItems, onChange }) => (
  <div>
    <h1>{title}</h1>
    {items.map(item => (
      <div key={item.id}>
        <label>
          <input
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            onChange={() => onChange(item.id)}
          />
          <span className='bold'>{item.name}</span> -
          <span>{item.description}</span> -
          <span className='bold'>R$ {item.price}</span>
        </label>
      </div>
    ))}
  </div>
);

export default ProductServiceSelector;