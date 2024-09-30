import React from 'react';
import { listSaleProposal } from '../../../services/api.ts';
import InLogin from '../../templates/InLogin.tsx';
import ListItens from '../../organisms/ListItens.tsx';

const SaleProposalPage = () => {

  return (
    <InLogin>
      <ListItens fn={listSaleProposal} title='Propostas de venda' />
    </InLogin>
  );
};

export default SaleProposalPage;