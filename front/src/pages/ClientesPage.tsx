import { useState, useEffect, useCallback } from "react";
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
  idendereco?: number; // ID do endereço, pode ser opcional ao criar
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
  sededtinclusao: string;
  idcliente: number;
  endereco?: Endereco;
}

/*
interface ClienteBackend {
    idcliente: number;
    clientenome: string;
    clientestatus: number;
}
    REDUNDANTE EXISTIR ESSA INTERFACE
*/

interface Cliente {
  idcliente?: number;
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
    sededtinclusao: "",
  });

  const fetchAllData = useCallback(async () => {
    try {
      const clientesResponse = await fetch("http://localhost:8080/api/cliente/listarCliente");
      if (!clientesResponse.ok) {
        throw new Error(`Falha ao buscar clientes: ${clientesResponse.status} ${clientesResponse.statusText}`);
      }

      // Recebe o JSON com tipo any[]
      const clientesDataRaw: any[] = await clientesResponse.json();

      // Faz o mapeamento para o formato Cliente
      const clientesFormatados: Cliente[] = clientesDataRaw.map(c => ({
        idcliente: c.idcliente,
        nome: c.clientenome,
        status: c.clientestatus === 1 ? "ativo" : "inativo",
        sedes: []
      }));

      const sedesResponse = await fetch("http://localhost:8080/api/sede");
      if (!sedesResponse.ok) {
        throw new Error(`Falha ao buscar sedes: ${sedesResponse.status} ${sedesResponse.statusText}`);
      }
      const sedesData: Sede[] = await sedesResponse.json();

      const enderecosResponse = await fetch("http://localhost:8080/api/endereco");
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
              ...sede, // *** ESSA LINHA É CRÍTICA: COPIA TODAS AS PROPRIEDADES EXISTENTES DA SEDE ***
              endereco: enderecoAssociado ? {
                  id: enderecoAssociado.idendereco, // Garante que o ID é copiado
                  enderecoendereco: enderecoAssociado.enderecoendereco,
                  enderecocep: enderecoAssociado.enderecocep,
                  enderecolat: enderecoAssociado.enderecolat,
                  enderecolon: enderecoAssociado.enderecolon,
                  idsede: enderecoAssociado.idsede,
              } : undefined,
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
      alert("Não possui dados inicias no banco de dados ou o back-end está inativo");
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const clientesFiltrados = clientes.filter((cliente) =>
    (cliente.nome ?? "").toLowerCase().includes((search ?? "").toLowerCase())
  );

  const sedesDoCliente =
    clienteSelecionadoIndex !== null ? clientes[clienteSelecionadoIndex].sedes : [];

  const sedesFiltradas = sedesDoCliente.filter((sede) =>
    sede.sedenome.toLowerCase().includes(searchSede.toLowerCase())
  );

 async function toggleStatusCliente(clienteToToggle: Cliente): Promise<{ nome: string; status: "ativo" | "inativo" } | void> {
  const novoStatusNum = clienteToToggle.status === "ativo" ? 0 : 1;
  try {
    const response = await fetch(`http://localhost:8080/api/cliente/atualizarCliente/${clienteToToggle.idcliente}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: clienteToToggle.nome,
        status: novoStatusNum,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar cliente");
    }

    const data = await response.json();

    const clienteAtualizado: Cliente = {
      idcliente: data.idcliente,
      nome: data.clientenome,
      status: data.clientestatus === 1 ? "ativo" : "inativo",
      sedes: clienteToToggle.sedes ?? [],
    };

    setClientes((clientesAntigos) =>
      clientesAntigos.map((c) =>
        c.idcliente === clienteAtualizado.idcliente ? clienteAtualizado : c
      )
    );

    return { nome: clienteAtualizado.nome, status: clienteAtualizado.status };

  } catch (error) {
    console.error("Erro ao atualizar status do cliente:", error);
  }
}

  function abrirEditarCliente(index: number) {
    setClienteEditandoIndex(index);
    setNomeEditando(clientes[index].nome);
  }

  async function salvarEdicaoCliente() {
  if (clienteEditandoIndex === null) return;

  const cliente = clientes[clienteEditandoIndex];

  try {
    const response = await fetch(`http://localhost:8080/api/cliente/atualizarCliente/${cliente.idcliente}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nomeEditando,
        status: cliente.status === "ativo" ? 1 : 0,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar cliente");
    }

    const data = await response.json();

    const clienteAtualizado: Cliente = {
      idcliente: data.idcliente,
      nome: data.clientenome,
      status: data.clientestatus === 1 ? "ativo" : "inativo",
      sedes: cliente.sedes ?? [],
    };

    setClientes((clientesAntigos) =>
      clientesAntigos.map((c) =>
        c.idcliente === clienteAtualizado.idcliente ? clienteAtualizado : c
      )
    );

    fecharEditarCliente();
    alert(`Cliente "${clienteAtualizado.nome}" atualizado com sucesso!`);
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error);
    alert("Erro ao atualizar cliente. Verifique o console.");
  }
}

  function fecharEditarCliente() {
    setClienteEditandoIndex(null);
    setNomeEditando("");
  }

  async function excluirCliente(index: number) {
    const cliente = clientes[index];

    if (!window.confirm(`Tem certeza que deseja excluir o cliente "${cliente.nome}"?`)) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/cliente/deletarCliente/${cliente.idcliente}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        if (response.status === 500) {
          alert("Não é possível excluir o Cliente, deve-se excluir as sedes primeiro.");
        } else {
          alert(`Erro ao excluir cliente: ${response.statusText}`);
        }
        return;
      }

      // Remove localmente após confirmação do backend
      setClientes((oldClientes) => {
        const novosClientes = [...oldClientes];
        novosClientes.splice(index, 1);
        return novosClientes;
      });

      if (clienteEditandoIndex === index) {
        fecharEditarCliente();
      }

      alert(`Cliente "${cliente.nome}" excluído com sucesso!`);
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
      alert("Erro ao excluir cliente. Verifique o console.");
    }
  }

  function abrirModalCriarCliente() {
    setNomeNovoCliente("");
    setModalCriarAberto(true);
  }

  async function salvarNovoCliente() {
  try {
    if (nomeNovoCliente.trim() === "") {
      alert("O nome do cliente é obrigatório.");
      return;
    }

    const novoCliente = {
      nome: nomeNovoCliente.trim(),
      status: "ativo",
      sedes: [],
    };

    const response = await fetch("http://localhost:8080/api/cliente/criarCliente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoCliente),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    // Recebe o cliente criado com ID e status do backend
    const clienteCriado = await response.json();

    // Atualize o estado com o cliente criado pelo backend
    setClientes((prevClientes) => [...prevClientes, {
      idcliente: clienteCriado.idcliente,
      nome: clienteCriado.clientenome, // ajuste conforme o retorno da API
      status: clienteCriado.clientestatus === 1 ? "ativo" : "inativo",
      sedes: clienteCriado.sedes ?? [],
    }]);

    setModalCriarAberto(false);
    alert("Cliente criado com sucesso.");
  } catch (error) {
    console.log("Erro ao inserir um novo cliente!", error);
    alert("Erro ao inserir um novo cliente!");
  }

}
  // ... (código anterior inalterado) ...

function toggleStatusSede(indexToToggle: number) {
  setClientes((oldClientes) => {
    const novosClientes = [...oldClientes];
    if (clienteSelecionadoIndex !== null) {
      const clienteAlvo = { ...novosClientes[clienteSelecionadoIndex] };
      const sedesAtualizadas = [...clienteAlvo.sedes];
      const sedeAntiga = sedesAtualizadas[indexToToggle];

      const novoStatusNumericoParaBackend: 0 | 1 = sedeAntiga.sedestatus === 1 ? 0 : 1;

      if (sedeAntiga.idsede) {
        // Objeto para a requisição da Sede
        const sedeBody = {
          sedenome: sedeAntiga.sedenome,
          sedestatus: novoStatusNumericoParaBackend,
          dataDeInclusao: sedeAntiga.dataDeInclusao,
          idcliente: sedeAntiga.idcliente
        };

        // Requisição para atualizar a Sede
        fetch(`http://localhost:8080/api/sede/${sedeAntiga.idsede}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sedeBody),
        })
          .then(async (response) => {
            if (!response.ok) {
              const errorData = await response.json().catch(() => ({ message: response.statusText }));
              console.error("Erro ao atualizar status da sede no backend. Resposta:", response.status, errorData);
              alert(`Não foi possível atualizar o status da sede no servidor: ${errorData.message}`);
            } else {
              // --- Sede atualizada com sucesso, agora tente atualizar o endereço (se existir) ---
              if (sedeAntiga.endereco && sedeAntiga.endereco.id) {
                const enderecoId = sedeAntiga.endereco.id;
                
                // Crie o corpo do endereço com o novo status
                const enderecoBody = {
                  enderecoendereco: sedeAntiga.endereco.enderecoendereco,
                  enderecocep: sedeAntiga.endereco.enderecocep,
                  enderecolat: sedeAntiga.endereco.enderecolat,
                  enderecolon: sedeAntiga.endereco.enderecolon,
                  enderecostatus: novoStatusNumericoParaBackend, // <--- ATENÇÃO: AQUI ESTÁ A MUDANÇA
                  idsede: sedeAntiga.idsede,
                };

                fetch(`http://localhost:8080/api/endereco/${enderecoId}`, { // ATENÇÃO: URL para PUT de endereço
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(enderecoBody),
                })
                  .then(async (enderecoResponse) => {
                    if (!enderecoResponse.ok) {
                      const errorData = await enderecoResponse.json().catch(() => ({ message: enderecoResponse.statusText }));
                      console.error("Erro ao atualizar status do endereço no backend. Resposta:", enderecoResponse.status, errorData);
                      alert(`A sede foi atualizada, mas não foi possível atualizar o status do endereço: ${errorData.message}`);
                    } else {
                      // Ambas as atualizações (sede e endereço) foram bem-sucedidas
                      // Atualize o estado no frontend para refletir as mudanças
                      setClientes((prevClientes) => {
                        return prevClientes.map((cliente, cliIdx) => {
                          if (cliIdx === clienteSelecionadoIndex) {
                            return {
                              ...cliente,
                              sedes: cliente.sedes.map((s, sIdx) =>
                                sIdx === indexToToggle
                                  ? {
                                      ...s,
                                      sedestatus: novoStatusNumericoParaBackend,
                                      endereco: s.endereco ? { ...s.endereco, enderecostatus: novoStatusNumericoParaBackend } : s.endereco // Atualiza status do endereço no estado
                                    }
                                  : s
                              ),
                            };
                          }
                          return cliente;
                        });
                      });
                    }
                  })
                  .catch((error) => {
                    console.error("Erro de rede ao atualizar status do endereço:", error);
                    alert("A sede foi atualizada, mas ocorreu um erro de rede ao atualizar o status do endereço.");
                  });
              } else {
                // Sede atualizada com sucesso, mas sem endereço para atualizar
                setClientes((prevClientes) => {
                  return prevClientes.map((cliente, cliIdx) => {
                    if (cliIdx === clienteSelecionadoIndex) {
                      return {
                        ...cliente,
                        sedes: cliente.sedes.map((s, sIdx) =>
                          sIdx === indexToToggle
                            ? { ...s, sedestatus: novoStatusNumericoParaBackend }
                            : s
                        ),
                      };
                    }
                    return cliente;
                  });
                });
                alert(`Status da sede atualizado com sucesso para ${novoStatusNumericoParaBackend === 1 ? 'Ativo' : 'Inativo'}! (Sem endereço associado para atualizar)`);
              }
            }
          })
          .catch((error) => {
            console.error("Erro de rede ao atualizar status da sede:", error);
            alert("Erro de rede ao atualizar status da sede. Verifique sua conexão.");
          });
      } else {
        console.warn("Sede sem ID. Não é possível atualizar o status no backend.");
      }
    }
    return novosClientes; // Retorna a cópia inicial (antes da atualização assíncrona)
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
      sededtinclusao: new Date().toLocaleDateString('pt-BR'),
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
      sededtinclusao: sede.sededtinclusao || new Date().toLocaleDateString('pt-BR'),
    });
    setSedeEditandoIndex(index);
    setModalSedeAberto(false);
    setModalCriarEditarSedeAberto(true);
  }

async function salvarSede() {
  if (clienteSelecionadoIndex === null) {
    console.error("Erro: Nenhum cliente selecionado.");
    alert("Nenhum cliente selecionado para salvar a sede.");
    return;
  }

  const clienteAtual = clientes[clienteSelecionadoIndex];
  console.log("Cliente Atual Selecionado:", clienteAtual);

  const sedesDoCliente = clienteAtual.sedes || [];
  console.log("Sedes do Cliente (antes de tentar acessar sedeEditandoIndex):", sedesDoCliente);

  const { sedenome, endereco, cep, latitude, longitude, status, sededtinclusao } = dadosSedeEditando;

  // 1. Validações Iniciais
  if (!sedenome.trim()) {
    alert("O nome da sede é obrigatório.");
    return;
  }
  const letterRegex = /[a-zA-Z]/;
  if (!letterRegex.test(sedenome)) {
    alert("O nome da sede deve conter pelo menos uma letra.");
    return;
  }

  if (!endereco.trim()) {
    alert("O endereço é obrigatório.");
    return;
  }
  if (!cep.trim()) {
    alert("O CEP é obrigatório.");
    return;
  }

  const cleanedCep = cep.replace(/\D/g, '');
  if (cleanedCep.length !== 8) {
    alert("O CEP deve conter 8 dígitos numéricos.");
    return;
  }

  let latNum: number | undefined;
  let lonNum: number | undefined;

  // Validação e conversão de Latitude
  if (latitude.trim() === "") {
    alert("A latitude é obrigatória.");
    return;
  }
  latNum = parseFloat(latitude.replace(',', '.'));
  if (isNaN(latNum) || latNum < -90 || latNum > 90) {
    alert("Latitude inválida. Deve ser um número entre -90 e 90.");
    return;
  }

  // Validação e conversão de Longitude
  if (longitude.trim() === "") {
    alert("A longitude é obrigatória.");
    return;
  }
  lonNum = parseFloat(longitude.replace(',', '.'));
  if (isNaN(lonNum) || lonNum < -180 || lonNum > 180) {
    alert("Longitude inválida. Deve ser um número entre -180 e 180.");
    return;
  }

  // Define o status numérico para ser usado tanto na sede quanto no endereço
  const novoStatusNumerico: 0 | 1 = status === "ativo" ? 1 : 0; // <--- NOVO: Definido aqui para reutilização

  // Decide se a sede está sendo editada (existe um ID de sede)
  const isEditingSede = sedeEditandoIndex !== null;
  console.log("Is Editing Sede:", isEditingSede, "Sede Editando Index:", sedeEditandoIndex);

  let sedeAtualNoEstado;
  if (isEditingSede && typeof sedeEditandoIndex === 'number' && sedesDoCliente[sedeEditandoIndex]) {
    sedeAtualNoEstado = sedesDoCliente[sedeEditandoIndex];
    console.log("Sede Atual no Estado (para edição):", sedeAtualNoEstado);
  } else {
    sedeAtualNoEstado = undefined;
    console.log("Não está editando uma sede existente ou sede não encontrada no índice.");
  }

  // Decide se o endereço já existe para esta sede
  const enderecoIdParaBackend = sedeAtualNoEstado?.endereco?.id;
  console.log("enderecoIdParaBackend FINAL (antes da requisição do endereço):", enderecoIdParaBackend);

  // 1. Requisição para a Sede (Criação ou Atualização)
  let idsedeParaAssociarEndereco;

  try {
    let sedeResponse;
    let sedeResponseBody;

    if (isEditingSede && sedeAtualNoEstado?.idsede) {
      // Lógica de atualização da Sede existente
      console.log("Requisição Sede: URL=" + `http://localhost:8080/api/sede/${sedeAtualNoEstado.idsede}` + ", Método=PUT", "Body:", JSON.stringify({
        sedenome: sedenome,
        sedestatus: novoStatusNumerico, // Usa o novoStatusNumerico
        dataDeInclusao: sededtinclusao,
        idcliente: clienteAtual.idcliente,
      }));
      sedeResponse = await fetch(`http://localhost:8080/api/sede/${sedeAtualNoEstado.idsede}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sedenome: sedenome,
          sedestatus: novoStatusNumerico, // Usa o novoStatusNumerico
          dataDeInclusao: sededtinclusao,
          idcliente: clienteAtual.idcliente,
        }),
      });
      sedeResponseBody = await sedeResponse.json();
      idsedeParaAssociarEndereco = sedeAtualNoEstado.idsede;
    } else {
      // Lógica de criação de Nova Sede
      const dataDeInclusao = new Date().toLocaleDateString('pt-BR');
      console.log("Requisição Sede: URL=" + "http://localhost:8080/api/sede" + ", Método=POST", "Body:", JSON.stringify({
        sedenome: sedenome,
        sedestatus: novoStatusNumerico, // Usa o novoStatusNumerico
        dataDeInclusao: dataDeInclusao,
        idcliente: clienteAtual.idcliente,
      }));
      sedeResponse = await fetch("http://localhost:8080/api/sede", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sedenome: sedenome,
          sedestatus: novoStatusNumerico, // Usa o novoStatusNumerico
          dataDeInclusao: dataDeInclusao,
          idcliente: clienteAtual.idcliente,
        }),
      });
      sedeResponseBody = await sedeResponse.json();
      idsedeParaAssociarEndereco = sedeResponseBody.sede?.idsede;
      console.log("Corpo da Resposta da Sede ao Criar:", sedeResponseBody);
      console.log("ID da Nova Sede pego do corpo da resposta:", idsedeParaAssociarEndereco);
    }

    if (!sedeResponse.ok) {
      const errorData = sedeResponseBody || await sedeResponse.json().catch(() => ({ message: sedeResponse.statusText }));
      throw new Error(`Erro ao salvar sede: ${errorData.message}`);
    }
    console.log("Resposta da Sede (final):", sedeResponseBody);
    console.log("idsedeParaAssociarEndereco (final para endereço):", idsedeParaAssociarEndereco);

    if (!idsedeParaAssociarEndereco && !isEditingSede) {
        throw new Error("Não foi possível obter o ID da sede recém-criada para associar ao endereço.");
    }

    // 2. Requisição para o Endereço (Criação ou Atualização)
    const enderecoBody = {
      enderecoendereco: endereco,
      enderecocep: cleanedCep,
      enderecolat: latNum,
      enderecolon: lonNum,
      idsede: idsedeParaAssociarEndereco,
      enderecostatus: novoStatusNumerico, // <--- ADIÇÃO: O status do endereço acompanha o da sede
    };

    let enderecoResponse;
    if (enderecoIdParaBackend) {
      console.log("Requisição Endereço: URL=" + `http://localhost:8080/api/endereco/${enderecoIdParaBackend}` + ", Método=PUT", "Body:", JSON.stringify(enderecoBody));
      enderecoResponse = await fetch(`http://localhost:8080/api/endereco/${enderecoIdParaBackend}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enderecoBody),
      });
    } else {
      console.log("Requisição Endereço: URL=" + "http://localhost:8080/api/endereco" + ", Método=POST", "Body:", JSON.stringify(enderecoBody));
      enderecoResponse = await fetch("http://localhost:8080/api/endereco", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enderecoBody),
      });
    }

    if (!enderecoResponse.ok) {
      const errorData = await enderecoResponse.json().catch(() => ({ message: enderecoResponse.statusText }));
      throw new Error(`Erro ao salvar endereço: ${errorData.message}`);
    }

    await fetchAllData();
    setModalCriarEditarSedeAberto(false);
    setModalSedeAberto(true);
    alert("Sede e endereço salvos com sucesso!");

  } catch (error: any) {
    console.error("Erro ao salvar sede e endereço:", error.message);
    alert("Erro ao salvar sede e endereço: " + error.message);
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
        const enderecoDeleteResponse = await fetch(`http://localhost:8080/api/endereco/${sedeParaExcluir.endereco.id}`, {
          method: 'DELETE',
        });
        if (!enderecoDeleteResponse.ok) {
          console.warn("Erro ao excluir endereço associado, continuando com a exclusão da sede:", await enderecoDeleteResponse.json().catch(() => ''));
        }
      }

      const sedeDeleteResponse = await fetch(`http://localhost:8080/api/sede/${sedeParaExcluir.idsede}`, {
        method: 'DELETE',
      });
      if (!sedeDeleteResponse.ok) {
        const errorData = await sedeDeleteResponse.json().catch(() => ({ message: sedeDeleteResponse.statusText }));
        throw new Error(`Erro ao excluir sede: ${errorData.message}`);
      }

      await fetchAllData();

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
            <DialogTitle className="text-lg font-bold mb-4">Criar Novo Cliente </DialogTitle>
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
                Inserir
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
              <tr key={cliente.idcliente ?? `cliente-${index}`} className="border-b hover:bg-gray-50">
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
                  {(cliente.status ?? "").toUpperCase()}
                  </div>
                </td>
                <td className="p-2">
                  <Button
                    className="bg-yellow-400 text-black text-xs h-7 px-3"
                    onClick={() => abrirModalSede(index)}
                  >
                    SEDES ({cliente.sedes?.length ?? 0})
                  </Button>
                </td>
                <td className="p-2 text-right">
                  <div className="flex gap-2 justify-end">
                    <Button
                      className={`text-xs h-7 px-3 ${
                        cliente.status === "ativo"
                          ? "bg-red-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                      onClick={() => toggleStatusCliente(cliente)}
                    >
                      {cliente.status === "ativo" ? "INATIVAR" : "ATIVAR"}
                    </Button>
                    <Button
                      className="bg-black text-white text-xs h-7 px-3"
                      onClick={() => abrirEditarCliente(index)}
                    >
                      EDITAR
                    </Button>
                    <Button
                      className="bg-red-600 text-white text-xs h-7 px-3"
                      onClick={() => excluirCliente(index)}
                    >
                      EXCLUIR
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
              Salvar 
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
                <th className="p-3 text-left w-10"></th> {/* <-- Aqui o espaço reservado para o ícone */}
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
                    
                    {/* Coluna do Waze */}
                    <td className="p-3 text-center">
                      <button
                        className="w-8 h-8 text-gray-600 hover:text-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                        type="button"
                        onClick={async () => {
                          try {
                            const response = await fetch(`http://localhost:8080/api/sede/${sede.idsede}`);
                            if (!response.ok) throw new Error('Erro ao buscar dados da sede');

                            const data = await response.json();

                            // Pega o primeiro endereço do array
                            const endereco = data.endereco && data.endereco.length > 0 ? data.endereco[0] : null;

                            if (endereco && endereco.enderecolat && endereco.enderecolon) {
                              const lat = endereco.enderecolat;
                              const lon = endereco.enderecolon;
                              const wazeUrl = `https://waze.com/ul?ll=${lat},${lon}&navigate=yes`;
                              window.open(wazeUrl, "_blank");
                            } else {
                              alert('Coordenadas não encontradas para esta sede.');
                            }
                          } catch (error) {
                            console.error(error);
                            alert('Falha ao buscar dados da sede.');
                          }
                        }}
                      >
                        <img src="/waze.png" alt="Waze" className="w-full h-full object-contain" />
                      </button>
                    </td>



                    
                    <td className="p-3 text-sm">{limitarTexto(sede.sedenome, 20)}</td>

                    <td className="p-3 text-sm">
                      <div className={`w-16 h-6 rounded-md text-center text-xs font-bold flex items-center justify-center
                          ${sede.sedestatus === 1 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                        {sede.sedestatus === 1 ? "ATIVO" : "INATIVO"}
                      </div>
                    </td>

                    <td className="p-3 text-sm">{sede.sededtinclusao}</td>

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