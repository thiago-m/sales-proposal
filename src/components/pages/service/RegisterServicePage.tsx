import React from 'react';
import InLogin from '../../templates/InLogin.tsx';
import FormDefault from '../../organisms/Form/Index.tsx';
import { registerService } from '../../../services/api.ts';

const ServiceRegisterPage = () => {

  const fields = [
    { name: 'name', value: '', label: 'Nome: ', inputType: 'text', placeholder: 'Digite o seu nome' },
    { name: 'description', value: '', label: 'Descrição: ', inputType: 'text', placeholder: 'Digite uma descrição do serviço' },
    { name: 'price', value: '', label: 'Preço: ', inputType: 'number', placeholder: 'Digite o preço do serviço' },
    { name: 'type', value: '', label: 'Tipo de serviço: ', options: ['', 'por hora', 'por empreitada', 'outros'], inputType: 'select' }
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
      newErrors.type = 'O tipo de serviço é obrigatório.';
      valid = false;
    } else if(!['por hora', 'por empreitada', 'outros'].find(type => type === values.type)) {
      newErrors.type = 'O tipo de serviço informado é inválido.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <InLogin>
      <div className="register-page">
        <FormDefault fields={fields} title="Cadastro de Serviço" fn={registerService} validate={validate} redirect="/service" />
      </div>
    </InLogin>
  );
};

export default ServiceRegisterPage;