import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/criar-proposta">Criar Proposta</Link></li>
        <li><Link to="/enviar-proposta">Enviar Proposta</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;