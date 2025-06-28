import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="https://cleversystems.com.br/wp-content/uploads/2021/01/site_logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 xl:space-x-8">
              <a href="" className="text-black font-semibold hover:text-gray-700 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap">
                HOME
              </a>
              <a href="/clientes" className="text-black font-semibold hover:text-gray-700 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap">
                CLIENTES
              </a>
              <a href="/tipoeq" className="text-black font-semibold hover:text-gray-700 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap">
                TIPO EQUIPAMENTO
              </a>
              <a href="/tipoinstalacao" className="text-black font-semibold hover:text-gray-700 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap">
                TIPO INSTALAÇÃO
              </a>
              <a href="/tipolaudo" className="text-black font-semibold hover:text-gray-700 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap">
                TIPO LAUDO
              </a>
              <a href="/equipamentos" className="text-black font-semibold hover:text-gray-700 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap">
                EQUIPAMENTOS
              </a>
              <a href="/laudo" className="text-black font-semibold hover:text-gray-700 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap">
                LAUDOS
              </a>
            </div>
          </div>

          {/* Desktop User Section */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <span className="text-black font-medium text-sm xl:text-base truncate max-w-32 xl:max-w-none">
              Guarani Campeão
            </span>
            <button
              className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
              onClick={() => navigate('/login')}
            >
              SAIR
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-yellow-300 border-t border-yellow-500">
          <a
            href=""
            className="text-black hover:bg-yellow-200 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </a>
          <a
            href="/clientes"
            className="text-black hover:bg-yellow-200 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            CLIENTES
          </a>
          <a
            href="/tipoeq"
            className="text-black hover:bg-yellow-200 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            TIPO EQUIPAMENTO
          </a>
          <a
            href="/tipoinstalacao"
            className="text-black hover:bg-yellow-200 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            TIPO INSTALAÇÃO
          </a>
          <a
            href="/tipolaudo"
            className="text-black hover:bg-yellow-200 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            TIPO LAUDO
          </a>
          <a
            href="/equipamentos"
            className="text-black hover:bg-yellow-200 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            EQUIPAMENTOS
          </a>
          <a
            href="/laudo"
            className="text-black hover:bg-yellow-200 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            LAUDOS
          </a>
          
          {/* Mobile User Section */}
          <div className="border-t border-yellow-500 pt-4 pb-3">
            <div className="flex items-center px-3">
              <span className="text-black font-medium text-base">Guarani Campeão</span>
            </div>
            <div className="mt-3 px-3">
              <button
                className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition-colors duration-200 w-full text-center"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/login');
                }}
              >
                SAIR
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;