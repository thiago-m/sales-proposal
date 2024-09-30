import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi.ts';
import useAuthStore from '../../store/AuthStore.tsx';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button/index.tsx';

import { sendSaleProposal } from '../../services/api.ts'

const ListItens = ({fn, title}) => {
  const { token } = useAuthStore()
  const { data, loading, error, request } = useApi(fn);

  useEffect(() => { request(token) }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const sendMail = async (e, id) => {
    e.preventDefault(); 
    await sendSaleProposal(id, token)
    alert('Email enviado com sucesso!');
  }

  return (
    <div className='list-card'>
      <h1>{title}</h1>
      <ul>
        {data?.map(item => (
          <li key={item.id}>
            <Link to={item.id} className="card">
            {item.name && <p className='bold'>{item.name}</p>}
            {item.email && <p>{item.email}</p>}
            {item.description && <p className='mtb-1'>{item.description}</p>}
            {item.type && <p className='bold mtb-1'>{item.type}</p>}
            {item.price && <p>{`R$ ${item.price}`}</p>}

            {item.client && (
              <>
                <p> {item.client.name} </p>
                <p> {item.client.email} </p>

                {item.products.length > 0 && (
                  <div className='mtb-1'>
                    <p className='bold'>Produtos</p>
                    <p>{item.products.map(p => p.name).toString().replaceAll(',', ', ')}</p>
                  </div>
                )}
                {item.services.length > 0 && (
                  <div className='mtb-1'>
                    <p className='bold'>Serviços</p>
                    <p>{item.services.map(s => s.name).toString().replaceAll(',', ', ')}</p>
                  </div>
                )}

                <Button disabled={loading} onClick={async (e) => await sendMail(e, item.id)}>
                  {loading ? 'Carregando...' : 'Enviar por email'}
                </Button>
              </>
            )}

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItens;