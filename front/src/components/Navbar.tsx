import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li>HOME</li>
        <li>CLIENTES</li>
        <li>EQUIPAMENTOS</li>
      </ul>
      <div className="user-actions">
        <span>Rafael Marconi</span>
        <button className="logout-button">SAIR</button>
      </div>
    </nav>
  );
};

export default Navbar;
