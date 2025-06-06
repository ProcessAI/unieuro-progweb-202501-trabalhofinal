import React, { useState } from 'react';

const TiposDeLaudos = () => {
  const [nome, setNome] = useState('');
  const [laudos, setLaudos] = useState([
    { id: 1, nome: 'Laudo Técnico' },
    { id: 2, nome: 'Laudo de Garantia' },
  ]);

  const handleAtualizar = () => {
    if (nome.trim()) {
      const novoId = laudos.length + 1;
      setLaudos([...laudos, { id: novoId, nome }]);
      setNome('');
    }
  };

  const handleEditar = (id: number) => {
    const laudo = laudos.find((l) => l.id === id);
    if (laudo) setNome(laudo.nome);
  };

  const handleExcluir = (id: number) => {
    setLaudos(laudos.filter((l) => l.id !== id));
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#f1f3f5' }}>
      {/* Barra amarela no topo */}
      <header
        style={{
          width: '100%',
          backgroundColor: '#ffc107',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
        }}
      >
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: '40px', objectFit: 'contain' }}
          />
          <a href="#" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
            HOME
          </a>
          <a href="#" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
            CLIENTES
          </a>
          <a href="#" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
            EQUIPAMENTOS
          </a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            style={{
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            SAIR
          </button>
        </div>
      </header>

      {/* Conteúdo da página */}
      <main
        style={{
          padding: '2rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <section>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1a1a1a',
              textAlign: 'center',
              marginBottom: '0.5rem',
            }}
          >
            Tipos de Laudos
          </h2>
          <p style={{ textAlign: 'center', color: '#555' }}>
            Cadastre, edite ou remova os tipos de laudo utilizados no sistema.
          </p>
        </section>

        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <input
            type="text"
            placeholder="Nome do tipo de laudo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '300px',
              fontSize: '1rem',
            }}
          />
          <button
            onClick={handleAtualizar}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ffc107',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            Cadastrar
          </button>
        </section>

        <section style={{ width: '100%', overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              minWidth: '800px',
              backgroundColor: '#fff',
              borderCollapse: 'collapse',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#3B3B3B' }}>
                <th style={{ textAlign: 'left', padding: '1rem', color: '#fff' }}>ID</th>
                <th style={{ textAlign: 'left', padding: '1rem', color: '#fff' }}>Nome</th>
                <th style={{ textAlign: 'left', padding: '1rem', color: '#fff' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {laudos.map((laudo) => (
                <tr
                  key={laudo.id}
                  style={{
                    borderBottom: '1px solid #eee',
                    backgroundColor: '#3B3B3B',
                    color: '#fff',
                  }}
                >
                  <td style={{ padding: '1rem' }}>{laudo.id}</td>
                  <td style={{ padding: '1rem' }}>{laudo.nome}</td>
                  <td style={{ padding: '1rem' }}>
                    <button
                      onClick={() => handleEditar(laudo.id)}
                      style={{
                        backgroundColor: '#ffc107',
                        color: '#000',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        marginRight: '0.5rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                      }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleExcluir(laudo.id)}
                      style={{
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                      }}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default TiposDeLaudos;
