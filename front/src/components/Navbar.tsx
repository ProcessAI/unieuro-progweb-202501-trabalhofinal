import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-yellow-400 px-4 py-3 flex items-center justify-between shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
          <img src="https://cleversystems.com.br/wp-content/uploads/2021/01/site_logo.png" alt="Logo" className="h-8 inline-block mr-2" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <a 
          href="" 
          className="text-black font-semibold hover:text-gray-700 transition-colors duration-200"
        >
          HOME
        </a>
        <a 
          href="/clientes"
          className="text-black font-semibold hover:text-gray-700 transition-colors duration-200"
        >
          CLIENTES
        </a>
        <a 
          href="/equipamentos"
          className="text-black font-semibold hover:text-gray-700 transition-colors duration-200"
        >
          EQUIPAMENTOS
        </a>
        <a 
          href="/laudos"
          className="text-black font-semibold hover:text-gray-700 transition-colors duration-200"
        >
          LAUDOS
        </a>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-2">
        <span className="text-black font-medium">Guarani Campeão</span>
        <button className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition-colors duration-200">
          SAIR
        </button>
      </div>
    </nav>
  );
};

export default Navbar;