import React from 'react';
import InLogin from '../../templates/InLogin.tsx';
import FormDefault from '../../organisms/Form/Index.tsx';
import { registerClient } from '../../../services/api.ts';

const ClientRegisterPage = () => {

  const fields = [
    { name: 'name', value: '', label: 'Nome: ', inputType: 'text', placeholder: 'Digite o seu nome' },
    { name: 'email', value: '', label: 'Email: ', inputType: 'email', placeholder: 'Digite o seu email' },
    { name: 'password', value: '', label: 'Senha: ', inputType: 'password', placeholder: 'Digite a sua senha' },
    { name: 'repeat_password', value: '', label: 'Repita a senha: ', inputType: 'password', placeholder: 'Digite a sua senha novamente' }
  ]

  
  const validate = (values, setErrors) => {
    let valid = true;
    const newErrors = { email: '', password: '', apiError: '' };
    
    if (!values.name) {
      newErrors.name = 'O nome é obrigatório.';
      valid = false;
    }

    if (!values.email) {
      newErrors.email = 'O email é obrigatório.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Digite um email válido.';
      valid = false;
    }

    if (!values.password) {
      newErrors.password = 'A senha é obrigatória.';
      valid = false;
    } else if (values.password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
      valid = false;
    }

    if (!values.repeat_password) {
      newErrors.repeat_password = 'A senha é obrigatória.';
      valid = false;
    } else if (values.repeat_password.length < 6) {
      newErrors.repeat_password = 'A senha deve ter pelo menos 6 caracteres.';
      valid = false;
    } else if (values.repeat_password !== values.password) {
      newErrors.repeat_password = 'As senhas devem ser iguais.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <InLogin>
      <div className="register-page">
        <FormDefault fields={fields} title="Cadastro de cliente" fn={registerClient} validate={validate} redirect="/client" />
      </div>
    </InLogin>
  );
};

export default ClientRegisterPage;