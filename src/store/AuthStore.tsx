import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode'

interface AuthStore {
  token: string | null
  expirationTime: number | null
  email: string | null
  setToken: (token: string) => void
  clearToken: () => void
  isTokenExpired: () => boolean
}

const getExpirationTime = () => {
  const expirationTime = localStorage.getItem('expirationTime')
  if(!expirationTime || isNaN(parseInt(expirationTime)) ) return null
  else return parseInt(expirationTime)

}

const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem('token') || null,
  expirationTime: getExpirationTime(),
    // @ts-ignore
  email: localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token') ?? '')?.email : null,

  setToken(token) {
    const expirationTime = new Date().getTime() + 3600 * 1000; // 1 hora a partir do tempo atual
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token)
    
    // @ts-ignore
    localStorage.setItem('email', decoded.email);
    // @ts-ignore
    localStorage.setItem('expirationTime', decoded.exp);
    set({ token, expirationTime });
  },

  clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    set({ token: null, expirationTime: null });
  },

  isTokenExpired: () => {
    const expirationTime = localStorage.getItem('expirationTime')
    if(!expirationTime || isNaN(parseInt(expirationTime)) ) return true

    return ((parseInt(expirationTime) * 1000) - Date.now()) > 0 ? false : true
  }
}));

export default useAuthStore;