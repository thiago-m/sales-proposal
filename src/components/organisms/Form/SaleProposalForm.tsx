import React, { useState, useEffect } from 'react';
import InputText from '../../atoms/Input/InputText.tsx' 
import SelectClient from '../../atoms/Input/SelectClient.tsx';
import ProductServiceSelector from '../../molecules/ProductServiceSelector.tsx';
import useAuthStore from '../../../store/AuthStore.tsx';
import { useNavigate  } from 'react-router-dom';
import { listClient, listProduct, listService, registerSaleProposal } from '../../../services/api.ts'
import Button from '../../atoms/Button/index.tsx';
import './index.scss'

const SaleProposalForm = () => {
  const [name, setName] = useState('');
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState('');
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const { token } = useAuthStore()
  const navigate = useNavigate()
  

  useEffect(() => {
    const fetchClients = async () => {
      setClients(await listClient(token));
    };
    
    const fetchProducts = async () => {
      setProducts(await listProduct(token));
    };

    const fetchServices = async () => {
      setServices(await listService(token));
    };

    fetchClients();
    fetchProducts();
    fetchServices();
  }, []);

  const handleProductChange = (id) => {
    setSelectedProducts((prev: any) => {
      if (prev.includes(id)) { return prev.filter(item => item !== id) }
      return [...prev, id];
    });
  };
  const handleServiceChange = (id) => {
    setSelectedServices((prev: any) => {
      if (prev.includes(id)) { return prev.filter(item => item !== id) }
      return [...prev, id];
    });
  };

  const isValidForm = () => { return [...selectedProducts, ...selectedServices].length >= 2 }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidForm()) {
      type objRequest = { name: string, client_id: string, itens: Array<{type: string, itens: Array<string>}> }
      
      const data: objRequest = { name, client_id: clientId, itens: [] };
      if(selectedProducts.length) data.itens.push({type: 'product', itens: selectedProducts})
      if(selectedServices.length) data.itens.push({type: 'service', itens: selectedServices})

      await registerSaleProposal(data, token)
      navigate('/sale-proposal')

    } else {
      alert('Selecione pelo menos 3 produtos ou serviços.');
    }
  };


  return (
    <div className='saleProposal'>
      <h1>Criar proposta de venda</h1>
      <form onSubmit={handleSubmit} className='form'>
        <InputText label="Nome da proposta: " value={name} onChange={(e) => setName(e.target.value)} />
        <SelectClient clients={clients} selectedClient={clientId} onChange={(e) => setClientId(e.target.value)}/>
        <ProductServiceSelector items={products} title="Selecione o produto" selectedItems={selectedProducts} onChange={handleProductChange} />
        <ProductServiceSelector items={services} title="Selecione o serviço" selectedItems={selectedServices} onChange={handleServiceChange} />
        <Button>Cadastrar</Button>
      </form>
    </div>
  );
};

export default SaleProposalForm;
