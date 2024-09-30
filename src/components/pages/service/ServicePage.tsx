import React from 'react';
import { listService } from '../../../services/api.ts';
import InLogin from '../../templates/InLogin.tsx';
import ListItens from '../../organisms/ListItens.tsx';

const ServicePage = () => {

  return (
    <InLogin>
      <ListItens fn={listService} title='Service' />
    </InLogin>
  );
};

export default ServicePage;