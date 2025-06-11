import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Sede {
  nome: string;
  endereco: string;
  cep: string;
  latitude: string;
  longitude: string;
}

interface Cliente {
  nome: string;
  status: "ativo" | "inativo";
  sedes: Sede[];
}

const clientesIniciais: Cliente[] = [
  {
    nome: "sicoob",
    status: "ativo",
    sedes: [
      {
        nome: "sede 1",
        endereco: "rua das flores-441",
        cep: "72414144",
        latitude: "15°47\\'56.864\\\"S",
        longitude: "47°52\\'1.286\\\"W",
      },
      {
        nome: "sede 2",
        endereco: "av das árvores-123",
        cep: "72414155",
        latitude: "15°48\\'00.000\\\"S",
        longitude: "47°53\\'00.000\\\"W",
      },
    ],
  },
  {
    nome: "superbom",
    status: "inativo",
    sedes: [
      {
        nome: "sede única",
        endereco: "rua das flores-441",
        cep: "72414144",
        latitude: "15°47\\'56.864\\\"S",
        longitude: "47°52\\'1.286\\\"W",
      },
    ],
  },
];

export default function ClientesPage() {
  const [search, setSearch] = useState("");
  const [clientes, setClientes] = useState<Cliente[]>(clientesIniciais);
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

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(search.toLowerCase())
  );

  const sedesDoCliente =
    clienteSelecionadoIndex !== null ? clientes[clienteSelecionadoIndex].sedes : [];

  const sedesFiltradas = sedesDoCliente.filter((sede) =>
    sede.nome.toLowerCase().includes(searchSede.toLowerCase())
  );

  function toggleStatus(clienteToToggle: Cliente) {
    setClientes((oldClientes) => {
      return oldClientes.map((cliente) => {
        if (cliente.nome === clienteToToggle.nome) {
          return {
            ...cliente,
            status: cliente.status === "ativo" ? "inativo" : "ativo",
          };
        }
        return cliente;
      });
    });
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

      <div className="bg-gray-100 px-6 py-4 max-w-5xl mx-auto sticky top-[48px] z-40 border-b border-gray-300 flex justify-between items-center">
        <Input
          placeholder="BUSCAR"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Dialog open={modalCriarAberto} onOpenChange={setModalCriarAberto}>
          <DialogTrigger asChild>
            <Button onClick={abrirModalCriar} className="bg-yellow-400 text-black font-bold">
              NOVO CLIENTE
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md w-full">
            <DialogTitle className="text-lg font-bold mb-4">Criar Novo Cliente</DialogTitle>
            <Input
              placeholder="Nome do cliente"
              value={nomeNovoCliente}
              onChange={(e) => setNomeNovoCliente(e.target.value)}
              autoFocus
              className="mb-4 w-full"
            />
            <div className="flex justify-end gap-2">
              <Button onClick={() => setModalCriarAberto(false)} className="bg-gray-300 text-black text-xs h-7 px-3">
                Cancelar
              </Button>
              <Button onClick={salvarNovoCliente} className="bg-yellow-400 text-black text-xs h-7 px-3">
                Salvar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="p-6 max-w-5xl mx-auto pt-4">
        <table className="w-full bg-white rounded shadow overflow-hidden">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Nome</th>
              <th className="p-2">Status</th>
              <th className="p-2">Sedes</th>
              <th className="p-2 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente, index) => (
              <tr key={cliente.nome} className="border-b hover:bg-gray-50">
                <td className="p-2 font-bold">{cliente.nome}</td>
                <td className="p-2">
                  <div
                    className={`w-16 h-6 rounded-md text-center text-xs font-bold ${
                      cliente.status === "ativo"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    } flex items-center justify-center`}
                  >
                    {cliente.status.toUpperCase()}
                  </div>
                </td>
                <td className="p-2">
                  <Button
                    className="bg-yellow-400 text-black text-xs h-7 px-3"
                    onClick={() => abrirModalSede(index)}
                  >
                    SEDES ({cliente.sedes.length})
                  </Button>
                </td>
                <td className="p-2 text-right">
                  <div className="flex gap-2 justify-end">
                    <Button
                      className="bg-black text-white text-xs h-7 px-3"
                      onClick={() => abrirEditar(index)}
                    >
                      EDITAR
                    </Button>
                    <Button
                      className="bg-red-600 text-white text-xs h-7 px-3"
                      onClick={() => excluirCliente(index)}
                    >
                      EXCLUIR
                    </Button>
                    <Button
                      className={`text-xs h-7 px-3 ${
                        cliente.status === "ativo"
                          ? "bg-red-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                      onClick={() => toggleStatus(cliente)}
                    >
                      {cliente.status === "ativo" ? "INATIVAR" : "ATIVAR"}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Editar Cliente */}
      <Dialog
        open={clienteEditandoIndex !== null}
        onOpenChange={(open) => {
          if (!open) fecharEditar();
        }}
      >
        <DialogContent className="max-w-md w-full">
          <DialogTitle className="text-lg font-bold mb-4">Editar Cliente</DialogTitle>
          <Input
            value={nomeEditando}
            onChange={(e) => setNomeEditando(e.target.value)}
            autoFocus
            className="mb-4 w-full"
          />
          <div className="flex justify-end gap-2">
            <Button onClick={fecharEditar} className="bg-gray-300 text-black text-xs h-7 px-3">
              Cancelar
            </Button>
            <Button onClick={salvarEdicao} className="bg-yellow-400 text-black text-xs h-7 px-3">
              Salvar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal Sedes do Cliente */}
      <Dialog open={modalSedeAberto} onOpenChange={setModalSedeAberto}>
        <DialogContent className="max-w-4xl w-full">
          <DialogTitle className="text-lg font-bold mb-4 flex justify-between items-center">
            <span>
              Sedes do cliente:{" "}
              {clienteSelecionadoIndex !== null ? clientes[clienteSelecionadoIndex].nome : ""}
            </span>
            <Button className="bg-yellow-400 text-black text-xs h-7 px-3" onClick={abrirModalCriarSede}>
              + NOVA SEDE
            </Button>
          </DialogTitle>

          <Input
            placeholder="BUSCAR SEDES"
            value={searchSede}
            onChange={(e) => setSearchSede(e.target.value)}
            className="mb-4 w-full max-w-md"
          />

          <table className="w-full border rounded border-gray-300 overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Nome</th>
                <th className="p-2 text-left">Endereço</th>
                <th className="p-2 text-left">CEP</th>
                <th className="p-2 text-left">Latitude</th>
                <th className="p-2 text-left">Longitude</th>
                <th className="p-2 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {sedesFiltradas.map((sede, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-2">{limitarTexto(sede.nome, 20)}</td>
                  <td className="p-2">{limitarTexto(sede.endereco, 25)}</td>
                  <td className="p-2">{sede.cep}</td>
                  <td className="p-2">{sede.latitude}</td>
                  <td className="p-2">{sede.longitude}</td>
                  <td className="p-2 text-right">
                    <div className="flex gap-2 justify-end">
                      <Button
                        className="bg-black text-white text-xs h-7 px-3"
                        onClick={() => abrirModalEditarSede(sede, index)}
                      >
                        EDITAR
                      </Button>
                      <Button
                        className="bg-red-600 text-white text-xs h-7 px-3"
                        onClick={() => excluirSede(index)}
                      >
                        EXCLUIR
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {sedesFiltradas.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-4 text-gray-500">
                    Nenhuma sede encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </DialogContent>
      </Dialog>

      {/* Modal Criar/Editar Sede */}
      <Dialog open={modalCriarEditarSedeAberto} onOpenChange={setModalCriarEditarSedeAberto}>
        <DialogContent className="max-w-md w-full">
          <DialogTitle className="text-lg font-bold mb-4">
            {sedeEditandoIndex !== null ? "Editar Sede" : "Nova Sede"}
          </DialogTitle>

          <Input
            placeholder="Nome"
            value={dadosSedeEditando.nome}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, nome: e.target.value })}
            className="mb-2 w-full"
            autoFocus
          />
          <Input
            placeholder="Endereço"
            value={dadosSedeEditando.endereco}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, endereco: e.target.value })}
            className="mb-2 w-full"
          />
          <Input
            placeholder="CEP"
            value={dadosSedeEditando.cep}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, cep: e.target.value })}
            className="mb-2 w-full"
          />
          <Input
            placeholder="Latitude"
            value={dadosSedeEditando.latitude}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, latitude: e.target.value })}
            className="mb-2 w-full"
          />
          <Input
            placeholder="Longitude"
            value={dadosSedeEditando.longitude}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, longitude: e.target.value })}
            className="mb-4 w-full"
          />

          <div className="flex justify-end gap-2">
            <Button onClick={() => setModalCriarEditarSedeAberto(false)} className="bg-gray-300 text-black text-xs h-7 px-3">
              Cancelar
            </Button>
            <Button onClick={salvarSede} className="bg-yellow-400 text-black text-xs h-7 px-3">
              Salvar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
