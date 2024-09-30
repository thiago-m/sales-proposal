import React, { useEffect, useState } from 'react';
import Button from '../../atoms/Button/index.tsx';
import './index.scss'

import useAuthStore from '../../../store/AuthStore.tsx';

import useApi from '../../../hooks/useApi.ts'

import Field from '../../molecules/Field.tsx'
import { useNavigate  } from 'react-router-dom';


const FormDefault = ({fields, title, fn, validate, redirect}) => {
  const { token, clearToken } = useAuthStore()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({ apiError: '' })
  const { error, request } = useApi(fn);

  useEffect(() => {
    if(error === "Acesso negado. Token não fornecido." || error === 'Token inválido.') {
      clearToken()
    } else if(error) {
      setErrors({ apiError: error });
    }
  }, [error])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(values, setErrors)) return;
    
    try {
      setLoading(true);
      setErrors({ apiError: '' });
      
      await request(values, token)

      if(!error) navigate(redirect)
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        apiError: error ?? 'Erro ao se conectar ao servidor. Tente novamente mais tarde.',
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>{title}</h1>
      <div className="fields">
        { fields.map(field => (
          <Field 
            key={field.name}
            label={field.label}
            error={errors[field.name]}
            value={values[field.name]}
            type={field.inputType}
            options={field.options}
            placeholder={field.placeholder}
            onChange={(e) => setValues((prevState) => ({...prevState, [field.name]: e.target.value}))}
          />
        )) }
      </div>
      {errors.apiError && <p className="error">{errors.apiError}</p>}
      <Button disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar'}
      </Button>

    </form>
  );
};

export default FormDefault;