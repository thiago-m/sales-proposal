import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Button from '../../atoms/Button/index.tsx';
import useAuthStore from '../../../store/AuthStore.tsx';
import './index.scss'

const MenuLateral = () => {
  const { email, clearToken } = useAuthStore()
  const navigate = useNavigate()

  function logoOf() {
    clearToken()
    navigate('/login')
  }

  return (
    <ul className="menu-lateral">
      <li className='user'> {email} </li>
      <li>
        <Link to='/client'>Clientes</Link>
        <ul className='sub-menu'>
          <li> <Link to='/client/register'>Cadastro de clientes</Link> </li>
        </ul>
      </li>
      <li> 
        <Link to='/product'>Produtos</Link>
        <ul className='sub-menu'>
          <li> 
            <Link to='/product/register'>Cadastro de Produtos</Link>
          </li>
        </ul>
      </li>
      <li> 
        <Link to='/service'>Serviços</Link>
        <ul className='sub-menu'>
          <li>  <Link to='/service/register'>Cadastro de Serviços</Link> </li>
        </ul>
      </li>
      <li> 
        <Link to='/sale-proposal'>Propostas de venda</Link>
        <ul className='sub-menu'>
          <li>  <Link to='/sale-proposal/register'>Registrar proposta de venda</Link> </li>
        </ul>
      </li>
      <li> 
        <Button onClick={logoOf} >Sair</Button>
      </li>
    </ul>
  )
}

export default MenuLateral