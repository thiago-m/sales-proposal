import React, { useEffect, useState } from 'react';
import Button from '../../atoms/Button/index.tsx';
import './index.scss'

import useAuthStore from '../../../store/AuthStore.tsx';

import { login } from '../../../services/api.ts'
import useApi from '../../../hooks/useApi.ts'

import Field from '../../molecules/Field.tsx'
import { useNavigate  } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', apiError: '' });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { email: '', password: '', apiError: '' };

    if (!email) {
      newErrors.email = 'O email é obrigatório.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Digite um email válido.';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'A senha é obrigatória.';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const { data, error: err, loading: loadingg, request } = useApi(login);
  const { setToken } = useAuthStore()

  useEffect(() => {
    if(data && data.token) {
      setToken(data.token)
      navigate('/')
    }
  }, [data])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      setErrors({ email: '', password: '', apiError: '' });
      
      await request(email, password)

    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        apiError: 'Erro ao se conectar ao servidor. Tente novamente mais tarde.',
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Login</h1>
      <div className="fields">
        <Field 
          label="Email:"
          error={errors.email}
          value={email}
          type="email"
          placeholder="Digite o seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Field 
          label="Email:"
          error={errors.password}
          value={password}
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors.apiError && <p className="error">{errors.apiError}</p>}
      <Button disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar'}
      </Button>

      <pre>
        {err}
      </pre>
      <pre>
        {loadingg}
      </pre>
    </form>
  );
};

export default LoginForm;