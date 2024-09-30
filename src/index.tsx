import ReactDOM from "react-dom/client";
import AppRoutes from './routes/index.tsx'
import React from "react";
import './styles/main.scss'

export default function App() {
  return <AppRoutes />
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);