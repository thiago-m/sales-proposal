import axios from 'axios'
const API_URL = 'http://localhost:3000';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, 
      { email, password },
      { headers: { 'Content-Type': 'application/json', } }
    )

    return await response.data
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const registerClient = async (body, token) => {
  try {
    const headers = { 'Content-Type': 'application/json', 'Authorization': token }
    const response = await axios.post(`${API_URL}/client`, body, { headers })

    return await response.data
  } catch (error) {
    if(error.response.status === 401 || error.response.status === 403) {
      throw new Error(error.response.data.message)
    }
    throw new Error(error.response.data.message || error.message);
  }
};

export const listClient = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/client`, { headers: { Authorization: token } })
    return await response.data
  } catch (error) {
    if(error.response.status === 401 || error.response.status === 403) {
      throw new Error(error.response.data.message)
    }
    throw new Error(error.response.data.message || error.message);
  }
};

export const listProduct = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/product`, { headers: { Authorization: token } })

    return await response.data
  } catch (error) {
    if(error.response.status === 401 || error.response.status === 403) {
      throw new Error(error.response.data.message)
    }
    throw new Error(error.response.data.message || error.message);
  }
};

export const listService = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/service`, { headers: { Authorization: token } })

    return await response.data
  } catch (error) {
    if(error.response.status === 401 || error.response.status === 403) {
      throw new Error(error.response.data.message)
    }
    throw new Error(error.response.data.message || error.message);
  }
};

export const listSaleProposal = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/sale-proposal`, { headers: { Authorization: token } })

    return await response.data
  } catch (error) {
    if(error.response.status === 401 || error.response.status === 403) {
      throw new Error(error.response.data.message)
    }
    throw new Error(error.response.data.message || error.message);
  }
};

export const registerProduct = async (body, token) => {
  try {
    const headers = { 'Content-Type': 'application/json', 'Authorization': token }
    const response = await axios.post(`${API_URL}/product`, body, { headers })

    return await response.data
  } catch (error) {
    if(error.response.status === 401 || error.response.status === 403) {
      throw new Error(error.response.data.message)
    }
    throw new Error(error.response.data.message || error.message);
  }
};

export const registerService = async (body, token) => {
  try {
    const headers = { 'Content-Type': 'application/json', 'Authorization': token }
    const response = await axios.post(`${API_URL}/service`, body, { headers })

    return await response.data
  } catch (error) {
    if(error.response.status === 401 || error.response.status === 403) {
      throw new Error(error.response.data.message)
    }
    throw new Error(error.response.data.message || error.message);
  }
};

export const registerSaleProposal = async (body, token) => {
  try {
    const headers = { 'Content-Type': 'application/json', 'Authorization': token }
    const response = await axios.post(`${API_URL}/sale-proposal`, body, { headers })

    return await response.data
  } catch (error) {
    if(error.response.status === 401 || error.response.status === 403) {
      throw new Error(error.response.data.message)
    }
    throw new Error(error.response.data.message || error.message);
  }
};
export const sendSaleProposal = async (id, token) => {
  try {
    const headers = { 'Content-Type': 'application/json', 'Authorization': token }
    const response = await axios.post(`${API_URL}/sale-proposal/${id}`, {}, { headers })

    return await response.data
  } catch (error) {
    if(error.response.status === 401 || error.response.status === 403) {
      throw new Error(error.response.data.message)
    }
    throw new Error(error.response.data.message || error.message);
  }
};
