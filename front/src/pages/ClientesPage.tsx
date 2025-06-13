import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { listarClientes } from "../services/Cliente-Service";

interface Sede {
  nome: string;
  endereco: string;
  cep: string;
  latitude: string;
  longitude: string;
}

interface Cliente {
  id: number;
  nome: string;
  status: "ativo" | "inativo";
  sedes: Sede[];
}

export default function ClientesPage() {
  const [search, setSearch] = useState("");
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [clienteEditandoIndex, setClienteEditandoIndex] = useState<number | null>(null);
  const [nomeEditando, setNomeEditando] = useState("");
  const [modalCriarAberto, setModalCriarAberto] = useState(false);
  const [nomeNovoCliente, setNomeNovoCliente] = useState("");
  const [modalSedeAberto, setModalSedeAberto] = useState(false);
  const [clienteSelecionadoIndex, setClienteSelecionadoIndex] = useState<number | null>(null);
  const [searchSede, setSearchSede] = useState("");
  const [modalCriarEditarSedeAberto, setModalCriarEditarSedeAberto] = useState(false);
  const [sedeEditandoIndex, setSedeEditandoIndex] = useState<number | null>(null);
  const [dadosSedeEditando, setDadosSedeEditando] = useState<Sede>({
    nome: "",
    endereco: "",
    cep: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    async function fetchClientes() {
      try {
        const dadosBrutos = await listarClientes();
        const dadosTransformados: Cliente[] = dadosBrutos.map((cliente: any) => ({
          id: cliente.idcliente,
          nome: cliente.clientenome,
          status: cliente.clientestatus === 1 ? "ativo" : "inativo",
          sedes: [],
        }));
        setClientes(dadosTransformados);
      } catch (error) {
        console.error("Erro ao carregar clientes:", error);
      }
    }
    fetchClientes();
  }, []);

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(search.toLowerCase())
  );

  const sedesDoCliente = clienteSelecionadoIndex !== null ? clientes[clienteSelecionadoIndex].sedes : [];

  const sedesFiltradas = sedesDoCliente.filter((sede) =>
    sede.nome.toLowerCase().includes(searchSede.toLowerCase())
  );

  function toggleStatus(clienteToToggle: Cliente) {
    setClientes((oldClientes) =>
      oldClientes.map((cliente) =>
        cliente.id === clienteToToggle.id
          ? { ...cliente, status: cliente.status === "ativo" ? "inativo" : "ativo" }
          : cliente
      )
    );
  }

  function abrirEditar(index: number) {
    setClienteEditandoIndex(index);
    setNomeEditando(clientes[index].nome);
  }

  function salvarEdicao() {
    setClientes((oldClientes) => {
      const novosClientes = [...oldClientes];
      if (clienteEditandoIndex !== null) {
        novosClientes[clienteEditandoIndex].nome = nomeEditando;
      }
      return novosClientes;
    });
    fecharEditar();
  }

  function fecharEditar() {
    setClienteEditandoIndex(null);
    setNomeEditando("");
  }

  function excluirCliente(index: number) {
    setClientes((oldClientes) => {
      const novosClientes = [...oldClientes];
      novosClientes.splice(index, 1);
      return novosClientes;
    });
    if (clienteEditandoIndex === index) {
      fecharEditar();
    }
  }

  function abrirModalCriar() {
    setNomeNovoCliente("");
    setModalCriarAberto(true);
  }

  function salvarNovoCliente() {
    if (nomeNovoCliente.trim() === "") return;
    const novoCliente: Cliente = {
      id: clientes.length > 0 ? Math.max(...clientes.map((c) => c.id)) + 1 : 1,
      nome: nomeNovoCliente.trim(),
      status: "ativo",
      sedes: [],
    };
    setClientes((oldClientes) => [...oldClientes, novoCliente]);
    setModalCriarAberto(false);
  }

  function abrirModalSede(index: number) {
    setClienteSelecionadoIndex(index);
    setSearchSede("");
    setModalSedeAberto(true);
  }

  function abrirModalCriarSede() {
    setDadosSedeEditando({
      nome: "",
      endereco: "",
      cep: "",
      latitude: "",
      longitude: "",
    });
    setSedeEditandoIndex(null);
    setModalCriarEditarSedeAberto(true);
  }

  function abrirModalEditarSede(sede: Sede, index: number) {
    setDadosSedeEditando({ ...sede });
    setSedeEditandoIndex(index);
    setModalCriarEditarSedeAberto(true);
  }

  function salvarSede() {
    if (dadosSedeEditando.nome.trim() === "") return;
    setClientes((oldClientes) => {
      const novosClientes = [...oldClientes];
      const sedes = [...novosClientes[clienteSelecionadoIndex!].sedes];
      if (sedeEditandoIndex !== null) {
        sedes[sedeEditandoIndex] = { ...dadosSedeEditando };
      } else {
        sedes.push({ ...dadosSedeEditando });
      }
      novosClientes[clienteSelecionadoIndex!].sedes = sedes;
      return novosClientes;
    });
    setModalCriarEditarSedeAberto(false);
  }

  function excluirSede(index: number) {
    setClientes((oldClientes) => {
      const novosClientes = [...oldClientes];
      const sedes = [...novosClientes[clienteSelecionadoIndex!].sedes];
      sedes.splice(index, 1);
      novosClientes[clienteSelecionadoIndex!].sedes = sedes;
      return novosClientes;
    });
  }

  function limitarTexto(texto: string, limite: number) {
    if (texto.length > limite) {
      return texto.slice(0, limite) + "...";
    }
    return texto;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <div className="bg-yellow-400 flex items-center justify-between px-4 py-2 shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <nav className="flex gap-4 font-bold">
            <a href="#">HOME</a>
            <a href="#">CLIENTES</a>
            <a href="#">PRODUTOS</a>
            <a href="#">EQUIPAMENTOS</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-bold">Rafael Marconi</span>
          <Button className="bg-black text-white">SAIR</Button>
        </div>
      </div>

      {/* Barra de busca e botão novo cliente */}
      <div className="bg-gray-100 px-6 py-4 max-w-5xl mx-auto sticky top-[48px] z-40 border-b border-gray-300 flex justify-between items-center">
        <Input
          placeholder="BUSCAR"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Dialog open={modalCriarAberto} onOpenChange={setModalCriarAberto}>
          <DialogTrigger asChild>
            <Button
              onClick={abrirModalCriar}
              className="bg-yellow-400 text-black font-bold"
            >
              NOVO CLIENTE
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md w-full">
            <DialogTitle className="text-lg font-bold mb-4">
              Criar Novo Cliente
            </DialogTitle>
            <Input
              placeholder="Nome do cliente"
              value={nomeNovoCliente}
              onChange={(e) => setNomeNovoCliente(e.target.value)}
              autoFocus
              className="mb-4 w-full"
            />
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => setModalCriarAberto(false)}
                className="bg-gray-300 text-black text-xs h-7 px-3"
              >
                Cancelar
              </Button>
              <Button
                onClick={salvarNovoCliente}
                className="bg-yellow-400 text-black text-xs h-7 px-3"
              >
                Salvar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Lista de clientes */}
      <div className="max-w-5xl mx-auto px-6 py-6">
        {clientesFiltrados.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum cliente encontrado.</p>
        ) : (
          clientesFiltrados.map((cliente, index) => (
            <div
              key={cliente.id}
              className="bg-white shadow p-4 rounded mb-4 flex justify-between items-center"
            >
              <div className="flex flex-col">
                {/* Mostrar ID do cliente */}
                <span className="text-xs text-gray-500 mb-1">ID: {cliente.id}</span>
                {clienteEditandoIndex === index ? (
                  <input
                    className="border border-gray-300 rounded px-2 py-1"
                    value={nomeEditando}
                    onChange={(e) => setNomeEditando(e.target.value)}
                  />
                ) : (
                  <h3 className="font-bold">{limitarTexto(cliente.nome, 30)}</h3>
                )}
                <p
                  className={`text-sm ${
                    cliente.status === "ativo" ? "text-green-600" : "text-red-600"
                  } font-semibold`}
                >
                  {cliente.status.toUpperCase()}
                </p>
              </div>

              <div className="flex gap-2">
                {clienteEditandoIndex === index ? (
                  <>
                    <Button
                      onClick={salvarEdicao}
                      className="bg-green-500 text-white text-xs h-7 px-3"
                    >
                      Salvar
                    </Button>
                    <Button
                      onClick={fecharEditar}
                      className="bg-gray-300 text-black text-xs h-7 px-3"
                    >
                      Cancelar
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => abrirEditar(index)}
                      className="bg-yellow-400 text-black text-xs h-7 px-3"
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => toggleStatus(cliente)}
                      className={`${
                        cliente.status === "ativo" ? "bg-red-600" : "bg-green-600"
                      } text-white text-xs h-7 px-3`}
                    >
                      {cliente.status === "ativo" ? "Inativar" : "Ativar"}
                    </Button>
                    <Button
                      onClick={() => excluirCliente(index)}
                      className="bg-red-600 text-white text-xs h-7 px-3"
                    >
                      Excluir
                    </Button>
                    <Button
                      onClick={() => abrirModalSede(index)}
                      className="bg-yellow-400 text-black text-xs h-7 px-3"
                    >
                      Ver Sedes
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal das sedes */}
      <Dialog open={modalSedeAberto} onOpenChange={setModalSedeAberto}>
        <DialogContent className="max-w-4xl w-full">
          <DialogTitle className="text-lg font-bold mb-4">
            Sedes do Cliente
          </DialogTitle>

          <div className="mb-4 flex gap-4 items-center">
            <Input
              placeholder="Buscar Sede"
              value={searchSede}
              onChange={(e) => setSearchSede(e.target.value)}
              className="flex-grow"
            />
            <Button
              onClick={abrirModalCriarSede}
              className="bg-yellow-400 text-black text-xs h-7 px-3"
            >
              Nova Sede
            </Button>
          </div>

          {sedesFiltradas.length === 0 ? (
            <p className="text-center text-gray-500">Nenhuma sede encontrada.</p>
          ) : (
            sedesFiltradas.map((sede, index) => (
              <div
                key={index}
                className="bg-white shadow p-4 rounded mb-4 flex justify-between items-center"
              >
                <div className="flex flex-col">
                  <h3 className="font-bold">{limitarTexto(sede.nome, 30)}</h3>
                  <p className="text-sm text-gray-700">{sede.endereco}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => abrirModalEditarSede(sede, index)}
                    className="bg-yellow-400 text-black text-xs h-7 px-3"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => excluirSede(index)}
                    className="bg-red-600 text-white text-xs h-7 px-3"
                  >
                    Excluir
                  </Button>
                </div>
              </div>
            ))
          )}

          <div className="flex justify-end">
            <Button
              onClick={() => setModalSedeAberto(false)}
              className="bg-gray-300 text-black text-xs h-7 px-3"
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal criar/editar sede */}
      <Dialog open={modalCriarEditarSedeAberto} onOpenChange={setModalCriarEditarSedeAberto}>
        <DialogContent className="max-w-md w-full">
          <DialogTitle className="text-lg font-bold mb-4">
            {sedeEditandoIndex !== null ? "Editar Sede" : "Nova Sede"}
          </DialogTitle>

          <Input
            placeholder="Nome"
            value={dadosSedeEditando.nome}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, nome: e.target.value })}
            className="mb-2"
          />
          <Input
            placeholder="Endereço"
            value={dadosSedeEditando.endereco}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, endereco: e.target.value })}
            className="mb-2"
          />
          <Input
            placeholder="CEP"
            value={dadosSedeEditando.cep}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, cep: e.target.value })}
            className="mb-2"
          />
          <Input
            placeholder="Latitude"
            value={dadosSedeEditando.latitude}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, latitude: e.target.value })}
            className="mb-2"
          />
          <Input
            placeholder="Longitude"
            value={dadosSedeEditando.longitude}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, longitude: e.target.value })}
            className="mb-4"
          />

          <div className="flex justify-end gap-2">
            <Button
              onClick={() => setModalCriarEditarSedeAberto(false)}
              className="bg-gray-300 text-black text-xs h-7 px-3"
            >
              Cancelar
            </Button>
            <Button
              onClick={salvarSede}
              className="bg-yellow-400 text-black text-xs h-7 px-3"
            >
              Salvar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
