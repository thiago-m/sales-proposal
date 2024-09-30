import React from 'react';
import { listProduct } from '../../../services/api.ts';
import InLogin from '../../templates/InLogin.tsx';
import ListItens from '../../organisms/ListItens.tsx';

const ProductPage = () => {

  return (
    <InLogin>
      <ListItens fn={listProduct} title='Produtos' />
    </InLogin>
  );
};

export default ProductPage;