import React from 'react';
import Label from '../Label/index.tsx';

const SelectClient = ({ clients, selectedClient, onChange }) => (
  <div>
    <label className='bold font-1-9'>Selecionar Cliente</label>
    <select value={selectedClient} onChange={onChange}>
      <option value="">Selecione um cliente</option>
      {clients.map(client => ( <option key={client.id} value={client.id}>{client.name}</option> ))}
    </select>
  </div>
);

export default SelectClient;