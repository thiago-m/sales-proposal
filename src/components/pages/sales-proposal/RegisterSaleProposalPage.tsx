import React from 'react';
import InLogin from '../../templates/InLogin.tsx';
import SaleProposalForm from '../../organisms/Form/SaleProposalForm.tsx';

const SaleProposalRegisterPage = () => {
  return (
    <InLogin>
      <div className="register-page">
        <SaleProposalForm />
      </div>
    </InLogin>
  );
};

export default SaleProposalRegisterPage;