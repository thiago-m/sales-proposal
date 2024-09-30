import React from 'react';
import { listClient } from '../../../services/api.ts';
import InLogin from '../../templates/InLogin.tsx';
import ListItens from '../../organisms/ListItens.tsx';

const ClientsPage = () => {

  return (
    <InLogin>
      <ListItens fn={listClient} title='Clientes' />
    </InLogin>
  );
};

export default ClientsPage;