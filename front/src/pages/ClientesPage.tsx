import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription, // Importar DialogDescription para acessibilidade
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
// Interfaces atualizadas
interface Endereco {
  id?: number; // ID do endereço, pode ser opcional ao criar
  enderecoendereco: string;
  enderecocep: string;
  enderecolat: number;
  enderecolon: number;
  idsede: number; // ID da sede a que pertence
}

interface Sede {
  idsede?: number; // ATENÇÃO: NOME DA PROPRIEDADE MUDADO PARA 'idsede'
  sedenome: string;
  sedestatus: 0 | 1;
  dataDeInclusao: string;
  idcliente: number;
  endereco?: Endereco;
}

interface ClienteBackend {
    idcliente: number;
    clientenome: string;
    clientestatus: number;
}

interface Cliente {
  idcliente: number;
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
  const [dadosSedeEditando, setDadosSedeEditando] = useState<Omit<Sede, 'idsede' | 'idcliente'> & { status: "ativo" | "inativo", endereco: string, cep: string, latitude: string, longitude: string }>({
    sedenome: "",
    endereco: "",
    cep: "",
    latitude: "",
    longitude: "",
    status: "ativo",
    dataDeInclusao: "",
  });

  const fetchAllData = useCallback(async () => {
    try {
      const clientesResponse = await fetch("http://localhost:3000/cliente/listarCliente");
      if (!clientesResponse.ok) {
        throw new Error(`Falha ao buscar clientes: ${clientesResponse.status} ${clientesResponse.statusText}`);
      }
      const clientesDataBackend: ClienteBackend[] = await clientesResponse.json();

      const clientesFormatados: Cliente[] = clientesDataBackend.map(c => ({
          idcliente: c.idcliente,
          nome: c.clientenome,
          status: c.clientestatus === 1 ? "ativo" : "inativo",
          sedes: []
      }));

      const sedesResponse = await fetch("http://localhost:3000/sede");
      if (!sedesResponse.ok) {
        throw new Error(`Falha ao buscar sedes: ${sedesResponse.status} ${sedesResponse.statusText}`);
      }
      const sedesData: Sede[] = await sedesResponse.json();

      const enderecosResponse = await fetch("http://localhost:3000/endereco");
      if (!enderecosResponse.ok) {
        throw new Error(`Falha ao buscar endereços: ${enderecosResponse.status} ${enderecosResponse.statusText}`);
      }
      const enderecosData: Endereco[] = await enderecosResponse.json();

      const clientesComSedesEEnderecos: Cliente[] = clientesFormatados.map((cliente) => {
        const sedesDoCliente = sedesData
          .filter((sede) => sede.idcliente === cliente.idcliente)
          .map((sede) => {
            const enderecoAssociado = enderecosData.find(
              (endereco) => endereco.idsede === sede.idsede
            );
            return {
              ...sede,
              endereco: enderecoAssociado ? { ...enderecoAssociado } : undefined,
            };
          });

        return {
          ...cliente,
          sedes: sedesDoCliente,
        };
      });

      setClientes(clientesComSedesEEnderecos);
    } catch (error: any) {
      console.error("Erro ao carregar dados iniciais:", error.message);
      alert("Erro ao carregar dados iniciais: " + error.message + ". Verifique o console do navegador e o terminal do backend.");
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(search.toLowerCase())
  );

  const sedesDoCliente =
    clienteSelecionadoIndex !== null ? clientes[clienteSelecionadoIndex].sedes : [];

  const sedesFiltradas = sedesDoCliente.filter((sede) =>
    sede.sedenome.toLowerCase().includes(searchSede.toLowerCase())
  );

  function toggleStatusCliente(clienteToToggle: Cliente) {
    setClientes((oldClientes) => {
      return oldClientes.map((cliente) => {
        if (cliente.idcliente === clienteToToggle.idcliente) {
          return {
            ...cliente,
            status: cliente.status === "ativo" ? "inativo" : "ativo",
          };
        }
        return cliente;
      });
    });
  }

  function abrirEditarCliente(index: number) {
    setClienteEditandoIndex(index);
    setNomeEditando(clientes[index].nome);
  }

  function salvarEdicaoCliente() {
    setClientes((oldClientes) => {
      const novosClientes = [...oldClientes];
      if (clienteEditandoIndex !== null) {
        novosClientes[clienteEditandoIndex].nome = nomeEditando;
      }
      return novosClientes;
    });
    fecharEditarCliente();
  }

  function fecharEditarCliente() {
    setClienteEditandoIndex(null);
    setNomeEditando("");
  }

  function excluirCliente(index: number) {
    if (!window.confirm(`Tem certeza que deseja excluir o cliente "${clientes[index].nome}" (localmente)?`)) {
      return;
    }
    setClientes((oldClientes) => {
      const novosClientes = [...oldClientes];
      novosClientes.splice(index, 1);
      return novosClientes;
    });
    if (clienteEditandoIndex === index) {
      fecharEditarCliente();
    }
  }

  function abrirModalCriarCliente() {
    setNomeNovoCliente("");
    setModalCriarAberto(true);
  }

  function salvarNovoCliente() {
    if (nomeNovoCliente.trim() === "") return;

    const novoId = Math.max(...clientes.map(c => c.idcliente)) + 1;
    const novoCliente: Cliente = {
      idcliente: novoId,
      nome: nomeNovoCliente.trim(),
      status: "ativo",
      sedes: [],
    };
    setClientes((prevClientes) => [...prevClientes, novoCliente]);
    setModalCriarAberto(false);
    alert("Cliente criado localmente (sem backend).");
  }

  function toggleStatusSede(indexToToggle: number) {
    setClientes((oldClientes) => {
      const novosClientes = [...oldClientes];
      if (clienteSelecionadoIndex !== null) {
        const sedes = [...novosClientes[clienteSelecionadoIndex].sedes];
        const sedeAntiga = sedes[indexToToggle];

        const novoStatusNumericoParaBackend: 0 | 1 = sedeAntiga.sedestatus === 1 ? 0 : 1;

        if (sedeAntiga.idsede) {
          fetch(`http://localhost:3000/sede/${sedeAntiga.idsede}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sedenome: sedeAntiga.sedenome,
              sedestatus: novoStatusNumericoParaBackend,
              dataDeInclusao: sedeAntiga.dataDeInclusao,
              idcliente: sedeAntiga.idcliente
            }),
          })
            .then(async response => {
              if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: response.statusText }));
                console.error("Erro ao atualizar status da sede no backend. Resposta:", response.status, errorData);
                alert(`Não foi possível atualizar o status da sede no servidor: ${errorData.message}`);
                setClientes((prev) => prev.map((cli, cliIdx) =>
                  cliIdx === clienteSelecionadoIndex
                    ? { ...cli, sedes: cli.sedes.map((s, sIdx) => sIdx === indexToToggle ? sedeAntiga : s) }
                    : cli
                ));
              } else {
                fetchAllData();
              }
            })
            .catch(error => {
              console.error("Erro de rede ao atualizar status da sede:", error);
              alert("Erro de rede ao atualizar status da sede. Verifique sua conexão.");
              setClientes((prev) => prev.map((cli, cliIdx) =>
                cliIdx === clienteSelecionadoIndex
                  ? { ...cli, sedes: cli.sedes.map((s, sIdx) => sIdx === indexToToggle ? sedeAntiga : s) }
                  : cli
              ));
            });
        } else {
          console.warn("Sede sem ID. Não é possível atualizar o status no backend.");
        }
      }
      return novosClientes;
    });
  }

  function abrirModalSede(index: number) {
    setClienteSelecionadoIndex(index);
    setSearchSede("");
    setModalSedeAberto(true);
  }

  function abrirModalCriarSede() {
    setDadosSedeEditando({
      sedenome: "",
      endereco: "",
      cep: "",
      latitude: "",
      longitude: "",
      status: "ativo",
      dataDeInclusao: new Date().toLocaleDateString('pt-BR'),
    });
    setSedeEditandoIndex(null);
    setModalSedeAberto(false);
    setModalCriarEditarSedeAberto(true);
  }
//
  function abrirModalEditarSede(sede: Sede, index: number) {
    setDadosSedeEditando({
      sedenome: sede.sedenome,
      endereco: sede.endereco?.enderecoendereco || "",
      cep: sede.endereco?.enderecocep || "",
      latitude: sede.endereco?.enderecolat?.toString() || "",
      longitude: sede.endereco?.enderecolon?.toString() || "",
      status: sede.sedestatus === 1 ? "ativo" : "inativo",
      dataDeInclusao: sede.dataDeInclusao || new Date().toLocaleDateString('pt-BR'),
    });
    setSedeEditandoIndex(index);
    setModalSedeAberto(false);
    setModalCriarEditarSedeAberto(true);
  }

  async function salvarSede() {
    const clienteAtual = clienteSelecionadoIndex !== null ? clientes[clienteSelecionadoIndex] : null;
    if (!clienteAtual) {
      alert("Nenhum cliente selecionado para criar a sede.");
      return;
    }

    const { sedenome, endereco, cep, latitude, longitude, status, dataDeInclusao } = dadosSedeEditando;

    // --- Validações de Frontend ---

    // 1. Campos obrigatórios preenchidos (trim)
    if (sedenome.trim() === "") {
        alert("O nome da sede é obrigatório.");
        return;
    }
    if (endereco.trim() === "") {
        alert("O endereço é obrigatório.");
        return;
    }
    if (cep.trim() === "") {
        alert("O CEP é obrigatório.");
        return;
    }
    if (latitude.trim() === "") {
        alert("A Latitude é obrigatória.");
        return;
    }
    if (longitude.trim() === "") {
        alert("A Longitude é obrigatória.");
        return;
    }

    // 2. Nome da Sede e Endereço devem conter pelo menos uma letra
    const letterRegex = /[a-zA-Z]/;
    if (!letterRegex.test(sedenome)) {
        alert("O nome da sede deve conter pelo menos uma letra.");
        return;
    }
    if (!letterRegex.test(endereco)) {
        alert("O endereço deve conter pelo menos uma letra.");
        return;
    }

    // 3. CEP: Exatamente 8 dígitos numéricos
    const cleanedCep = cep.replace(/\D/g, ''); // Remove não-dígitos
    if (cleanedCep.length !== 8) {
        alert("O CEP deve conter exatamente 8 dígitos numéricos.");
        return;
    }
    // Adicionalmente, garante que o input do CEP não está em branco após a limpeza
    if (!/^\d{8}$/.test(cleanedCep)) { // Confirma que são 8 dígitos
        alert("O CEP deve conter apenas números e ter 8 dígitos.");
        return;
    }


    // 4. Latitude e Longitude: Devem ser números válidos
    const latNum = parseFloat(latitude);
    const lonNum = parseFloat(longitude);

    if (isNaN(latNum)) {
        alert("Latitude inválida. Por favor, insira um número válido.");
        return;
    }
    if (isNaN(lonNum)) {
        alert("Longitude inválida. Por favor, insira um número válido.");
        return;
    }
    // Opcional: Regex mais rigorosa para o formato -23.55052
    // A validação parseFloat já é a mais importante. Se você quer
    // forçar um formato visual, pode adicionar uma regex, mas
    // para funcionalidade, parseFloat é o suficiente.
    // Exemplo:
    // const coordRegex = /^-?\d+(\.\d+)?$/; // Aceita inteiros e decimais com ponto, com ou sem sinal
    // if (!coordRegex.test(latitude) || !coordRegex.test(longitude)) {
    //     alert("Latitude e Longitude devem estar no formato numérico (ex: -23.55052).");
    //     return;
    // }

    // --- Fim das Validações de Frontend ---

    const dataDeInclusaoFormatada = dataDeInclusao || new Date().toLocaleDateString('pt-BR');
    const sedestatusParaBackend: 0 | 1 = status === "ativo" ? 1 : 0;

    let sedeIdParaEndereco: number | undefined;
    let enderecoExistenteId: number | undefined;

    if (sedeEditandoIndex !== null) {
      const sedeExistente = clienteAtual.sedes[sedeEditandoIndex];
      if (sedeExistente && sedeExistente.idsede) {
        sedeIdParaEndereco = sedeExistente.idsede;
        enderecoExistenteId = sedeExistente.endereco?.id;
      }
    }

    try {
      const sedeParaBackend = {
        sedenome: sedenome,
        sedestatus: sedestatusParaBackend,
        dataDeInclusao: dataDeInclusaoFormatada,
        idcliente: clienteAtual.idcliente,
      };

      const urlSede = sedeIdParaEndereco
        ? `http://localhost:3000/sede/${sedeIdParaEndereco}`
        : "http://localhost:3000/sede";
      const methodSede: "POST" | "PUT" = sedeIdParaEndereco ? "PUT" : "POST";

      const responseSede = await fetch(urlSede, {
        method: methodSede,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sedeParaBackend),
      });

      if (!responseSede.ok) {
        const errorData = await responseSede.json().catch(() => ({ message: responseSede.statusText }));
        throw new Error(`Erro ao ${methodSede === "POST" ? "criar" : "atualizar"} sede: ${errorData.message}`);
      }

      const sedeResposta = await responseSede.json();

      sedeIdParaEndereco = sedeResposta.sede?.idsede;

      if (!sedeIdParaEndereco) {
        throw new Error("ID da sede não foi retornado na estrutura esperada (sede.idsede) após a criação/atualização. Verifique o backend para garantir que ele retorna o 'idsede' dentro do objeto 'sede' na resposta POST e PUT.");
      }

      const dadosEndereco = {
        enderecoendereco: endereco,
        enderecocep: cleanedCep, // Usar o CEP limpo para o backend
        enderecolat: latNum,     // Usar o número parseado
        enderecolon: lonNum,    // Usar o número parseado
        idsede: sedeIdParaEndereco,
      };

      const urlEndereco = enderecoExistenteId
        ? `http://localhost:3000/endereco/${enderecoExistenteId}`
        : "http://localhost:3000/endereco";
      const methodEndereco: "POST" | "PUT" = enderecoExistenteId ? "PUT" : "POST";

      const responseEndereco = await fetch(urlEndereco, {
        method: methodEndereco,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosEndereco),
      });

      if (!responseEndereco.ok) {
        const errorData = await responseEndereco.json().catch(() => ({ message: responseEndereco.statusText }));
        throw new Error(`Erro ao ${methodEndereco === "POST" ? "criar" : "atualizar"} endereço: ${errorData.message}`);
      }

      await fetchAllData();
      setModalCriarEditarSedeAberto(false);
      setModalSedeAberto(true);
      alert(`Sede e endereço ${methodSede === "POST" ? "criados" : "atualizados"} com sucesso!`);

    } catch (error: any) {
      console.error("Erro ao salvar sede e/ou endereço:", error.message);
      alert(`Erro ao salvar a sede e/ou endereço: ${error.message}. Por favor, verifique o console para mais detalhes e certifique-se de que o backend está retornando o ID da sede.`);
    }
  }

  async function excluirSede(index: number) {
    if (clienteSelecionadoIndex === null) return;

    const sedeParaExcluir = clientes[clienteSelecionadoIndex].sedes[index];
    if (!sedeParaExcluir || !sedeParaExcluir.idsede) {
      alert("Sede não possui ID para exclusão.");
      return;
    }

    if (!window.confirm(`Tem certeza que deseja excluir a sede "${sedeParaExcluir.sedenome}" e seu endereço associado?`)) {
      return;
    }

    try {
      if (sedeParaExcluir.endereco?.id) {
        const enderecoDeleteResponse = await fetch(`http://localhost:3000/endereco/${sedeParaExcluir.endereco.id}`, {
          method: 'DELETE',
        });
        if (!enderecoDeleteResponse.ok) {
          console.warn("Erro ao excluir endereço associado, continuando com a exclusão da sede:", await enderecoDeleteResponse.json().catch(() => ''));
        }
      }

      const sedeDeleteResponse = await fetch(`http://localhost:3000/sede/${sedeParaExcluir.idsede}`, {
        method: 'DELETE',
      });
      if (!sedeDeleteResponse.ok) {
        const errorData = await sedeDeleteResponse.json().catch(() => ({ message: sedeDeleteResponse.statusText }));
        throw new Error(`Erro ao excluir sede: ${errorData.message}`);
      }

      await fetchAllData();
      alert("Sede e seu endereço associado (se existia) excluídos com sucesso!");

    } catch (error: any) {
      console.error("Erro ao excluir sede:", error.message);
      alert(`Erro ao excluir sede: ${error.message}.`);
    }
  }

  function limitarTexto(texto: string, limite: number) {
    if (texto.length > limite) {
      return texto.slice(0, limite) + "...";
    }
    return texto;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="bg-gray-100 px-6 py-4 max-w-5xl mx-auto sticky top-[48px] z-40 border-b border-gray-300 flex justify-between items-center">
        <Input
          placeholder="BUSCAR"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Dialog open={modalCriarAberto} onOpenChange={setModalCriarAberto}>
          <DialogTrigger asChild>
            <Button onClick={abrirModalCriarCliente} className="bg-yellow-400 text-black font-bold">
              NOVO CLIENTE
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md w-full">
            <DialogTitle className="text-lg font-bold mb-4">Criar Novo Cliente (Apenas Frontend)</DialogTitle>
            <DialogDescription>
                Preencha o nome do cliente.
            </DialogDescription> {/* Adicionado para acessibilidade */}
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
                Salvar (Apenas Frontend)
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="p-6 max-w-5xl mx-auto pt-4">
        <table className="w-full bg-white rounded shadow overflow-hidden">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">ID</th>
              <th className="p-2">Nome</th>
              <th className="p-2">Status</th>
              <th className="p-2">Sedes</th>
              <th className="p-2 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente, index) => (
              <tr key={cliente.idcliente} className="border-b hover:bg-gray-50">
                <td className="p-2">{cliente.idcliente}</td>
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
                      onClick={() => abrirEditarCliente(index)}
                    >
                      EDITAR (Frontend)
                    </Button>
                    <Button
                      className="bg-red-600 text-white text-xs h-7 px-3"
                      onClick={() => excluirCliente(index)}
                    >
                      EXCLUIR (Frontend)
                    </Button>
                    <Button
                      className={`text-xs h-7 px-3 ${
                        cliente.status === "ativo"
                          ? "bg-red-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                      onClick={() => toggleStatusCliente(cliente)}
                    >
                      {cliente.status === "ativo" ? "INATIVAR (Frontend)" : "ATIVAR (Frontend)"}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog
        open={clienteEditandoIndex !== null}
        onOpenChange={(open) => {
          if (!open) fecharEditarCliente();
        }}
      >
        <DialogContent className="max-w-md w-full">
          <DialogTitle className="text-lg font-bold mb-4">Editar Cliente (Apenas Frontend)</DialogTitle>
          <DialogDescription>
            Edite o nome do cliente no campo abaixo.
          </DialogDescription> {/* Adicionado para acessibilidade */}
          <Input
            value={nomeEditando}
            onChange={(e) => setNomeEditando(e.target.value)}
            autoFocus
            className="mb-4 w-full"
          />
          <div className="flex justify-end gap-2">
            <Button onClick={fecharEditarCliente} className="bg-gray-300 text-black text-xs h-7 px-3">
              Cancelar
            </Button>
            <Button onClick={salvarEdicaoCliente} className="bg-yellow-400 text-black text-xs h-7 px-3">
              Salvar (Apenas Frontend)
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={modalSedeAberto} onOpenChange={setModalSedeAberto}>
        <DialogContent className="w-[80vw] h-[80vh] !max-w-none p-6 flex flex-col">
          <div className="sticky top-0 bg-white pb-4 border-b border-gray-200 -mx-6 px-6">
            <DialogTitle className="text-2xl font-bold mb-4 flex justify-between items-center">
              <span>
                Sedes do Cliente:{" "}
                <span className="text-yellow-600">
                  {clienteSelecionadoIndex !== null ? clientes[clienteSelecionadoIndex].nome : ""}
                </span>
              </span>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm h-9 px-4 rounded-md shadow-sm mr-3" onClick={abrirModalCriarSede}>
                + Nova Sede
              </Button>
            </DialogTitle>
            <DialogDescription className="sr-only">
              Visualize e gerencie as sedes deste cliente. Use a busca para filtrar.
            </DialogDescription> {/* Adicionado para acessibilidade */}

            <Input
              placeholder="Buscar Sedes..."
              value={searchSede}
              onChange={(e) => setSearchSede(e.target.value)}
              className="w-full max-w-lg rounded-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div className="flex-grow overflow-y-auto mt-4">
            <table className="w-full border rounded-md border-gray-300 overflow-hidden">
              <thead className="bg-gray-100 sticky top-0 z-5">
                <tr>
                  <th className="p-3 text-left">Nome</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Data de Inclusão</th>
                  <th className="p-3 text-left">Endereço</th>
                  <th className="p-3 text-left">CEP</th>
                  <th className="p-3 text-left">Latitude</th>
                  <th className="p-3 text-left">Longitude</th>
                  <th className="p-3 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {sedesFiltradas.map((sede, index) => (
                  <tr key={sede.idsede || `temp-${index}`} className="border-b last:border-b-0 hover:bg-gray-50">
                    <td className="p-3 text-sm">{limitarTexto(sede.sedenome, 20)}</td>

                    <td className="p-3 text-sm">
                      <div className={`w-16 h-6 rounded-md text-center text-xs font-bold flex items-center justify-center
                          ${sede.sedestatus === 1 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                        {sede.sedestatus === 1 ? "ATIVO" : "INATIVO"}
                      </div>
                    </td>

                    <td className="p-3 text-sm">{sede.dataDeInclusao}</td>

                    <td className="p-3 text-sm">{limitarTexto(sede.endereco?.enderecoendereco || "N/A", 25)}</td>
                    <td className="p-3 text-sm">{sede.endereco?.enderecocep || "N/A"}</td>
                    <td className="p-3 text-sm">{sede.endereco?.enderecolat?.toString() || "N/A"}</td>
                    <td className="p-3 text-sm">{sede.endereco?.enderecolon?.toString() || "N/A"}</td>

                    <td className="p-3 text-right">
                      <div className="flex gap-2 justify-end">
                        <Button
                          className={`text-xs h-8 px-3 rounded-md ${
                            sede.sedestatus === 1
                              ? "bg-red-600 hover:bg-red-700 text-white"
                              : "bg-green-600 hover:bg-green-700 text-white"
                          }`}
                          onClick={() => toggleStatusSede(index)}
                        >
                          {sede.sedestatus === 1 ? "DESATIVAR" : "ATIVAR"}
                        </Button>
                        <Button
                          className="bg-black hover:bg-gray-800 text-white text-xs h-8 px-3 rounded-md"
                          onClick={() => abrirModalEditarSede(sede, index)}
                        >
                          EDITAR
                        </Button>
                        <Button
                          className="bg-red-600 hover:bg-red-700 text-white text-xs h-8 px-3 rounded-md"
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
                    <td colSpan={8} className="text-center p-6 text-gray-500 italic">
                      Nenhuma sede encontrada para este cliente.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={modalCriarEditarSedeAberto} onOpenChange={setModalCriarEditarSedeAberto}>
        <DialogContent className="max-w-md w-full">
          <DialogTitle className="text-lg font-bold mb-4">
            {sedeEditandoIndex !== null ? "Editar Sede" : "Nova Sede"}
          </DialogTitle>
          <DialogDescription>
            Preencha os detalhes da sede e seu endereço associado. Todos os campos são obrigatórios.
          </DialogDescription> {/* Adicionado para acessibilidade */}

          <Input
            placeholder="Nome da Sede"
            value={dadosSedeEditando.sedenome}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, sedenome: e.target.value })}
            className="mb-2 w-full"
            autoFocus
          />
          <Input
            placeholder="Endereço (Rua, Número, Bairro)"
            value={dadosSedeEditando.endereco}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, endereco: e.target.value })}
            className="mb-2 w-full"
          />
          <Input
            placeholder="CEP (apenas números, 8 dígitos)"
            value={dadosSedeEditando.cep}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, cep: e.target.value.replace(/\D/g, '').substring(0, 8) })}
            maxLength={8}
            className="mb-2 w-full"
            type="text" // Mantido como text para permitir a máscara visual
          />
          <Input
            placeholder="Latitude (ex: -23.55052)"
            value={dadosSedeEditando.latitude}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, latitude: e.target.value })}
            className="mb-2 w-full"
            type="text" // Mantido como text para permitir o sinal de negativo e decimais
          />
          <Input
            placeholder="Longitude (ex: -46.633308)"
            value={dadosSedeEditando.longitude}
            onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, longitude: e.target.value })}
            className="mb-4 w-full"
            type="text" // Mantido como text
          />
          <div className="mb-4 w-full">
            <label htmlFor="status-sede" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              id="status-sede"
              value={dadosSedeEditando.status}
              onChange={(e) => setDadosSedeEditando({ ...dadosSedeEditando, status: e.target.value as "ativo" | "inativo" })}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md shadow-sm"
            >
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>

          <div className="flex justify-end gap-2">
            <Button onClick={() => {
              setModalCriarEditarSedeAberto(false);
              setModalSedeAberto(true);
            }} className="bg-gray-300 text-black text-xs h-7 px-3">
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