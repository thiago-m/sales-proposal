import React from 'react';
import InLogin from '../../templates/InLogin.tsx';
import FormDefault from '../../organisms/Form/Index.tsx';
import { registerProduct } from '../../../services/api.ts';

const ProductRegisterPage = () => {

  const fields = [
    { name: 'name', value: '', label: 'Nome: ', inputType: 'text', placeholder: 'Digite o seu nome' },
    { name: 'description', value: '', label: 'Descrição: ', inputType: 'text', placeholder: 'Digite uma descrição do produto' },
    { name: 'price', value: '', label: 'Preço: ', inputType: 'number', placeholder: 'Digite o preço do produto' },
    { name: 'type', value: '', label: 'Tipo de produto: ', options: ['', 'novo', 'usado', 'comestível'], inputType: 'select' }
  ]

  
  const validate = (values, setErrors) => {
    let valid = true;
    const newErrors = { name: '', description: '', price: '', type: '' };

    if (!values.name) {
      newErrors.name = 'O nome é obrigatório.';
      valid = false;
    }

    if (!values.description) {
      newErrors.description = 'A descrição é obrigatório.';
      valid = false;
    }

    if (!values.price) {
      newErrors.price = 'O preço é obrigatório.';
      valid = false;
    }

    if (!values.type) {
      newErrors.type = 'O tipo de produto é obrigatório.';
      valid = false;
    } else if(!['novo', 'usado', 'comestível'].find(type => type === values.type)) {
      newErrors.type = 'O tipo de produto informado é inválido.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  return (
    <InLogin>
      <div className="register-page">
        <FormDefault fields={fields} title="Cadastro de produto" fn={registerProduct} validate={validate} redirect="/product" />
      </div>
    </InLogin>
  );
};

export default ProductRegisterPage;