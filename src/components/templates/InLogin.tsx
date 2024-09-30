import React from "react";
import MenuLateral from "../organisms/MenuLateral/index.tsx";
import './InLogin.scss'

const InLogin: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="in-login">
      <MenuLateral />
      <main> {children} </main>
    </div>
  )
}

export default InLogin
