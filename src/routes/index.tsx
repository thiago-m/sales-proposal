import React from 'react';
import LoginPage from '../components/pages/LoginPage.tsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from '../components/pages/HomePage.tsx';

import useAuthStore from '../store/AuthStore.tsx';
import ClientRegisterPage from '../components/pages/client/RegisterClientPage.tsx';
import ClientsPage from '../components/pages/client/ClientsPage.tsx';
import ProductRegisterPage from '../components/pages/product/RegisterProductPage.tsx';
import ServiceRegisterPage from '../components/pages/service/RegisterServicePage.tsx';
import ProductPage from '../components/pages/product/ProductPage.tsx';
import ServicePage from '../components/pages/service/ServicePage.tsx';
import SaleProposalPage from '../components/pages/sales-proposal/SaleProposalPage.tsx';
import SaleProposalRegisterPage from '../components/pages/sales-proposal/RegisterSaleProposalPage.tsx';

const AppRoutes = () => {
  const { token } = useAuthStore()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!token ? <LoginPage /> : <Navigate to="/" replace />} />

        <Route path="/" element={token ? <HomePage /> : <Navigate to="/login" replace />} />

        <Route path="/client" element={token ? <ClientsPage /> : <Navigate to="/login" replace />} />
        <Route path="/client/register" element={token ? <ClientRegisterPage /> : <Navigate to="/login" replace />} />
        
        <Route path="/product" element={token ? <ProductPage/> : <Navigate to="/login" replace />} />
        <Route path="/product/register" element={token ? <ProductRegisterPage /> : <Navigate to="/login" replace />} />
        
        <Route path="/service" element={token ? <ServicePage /> : <Navigate to="/login" replace />} />
        <Route path="/service/register" element={token ? <ServiceRegisterPage/> : <Navigate to="/login" replace />} />
        
        <Route path="/sale-proposal" element={token ? <SaleProposalPage /> : <Navigate to="/login" replace />} />
        <Route path="/sale-proposal/register" element={token ? <SaleProposalRegisterPage /> : <Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;