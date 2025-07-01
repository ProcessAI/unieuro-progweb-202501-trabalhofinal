export interface Equipamento {
  id?: number;           // novo campo opcional para guardar o id real
  modelo: string;
  serie: string;
  tipo: string;     // texto, ex: "Desktop"
  alugado: string;  // "Sim" ou "Não"
  sede: string;     // texto, ex: "Matriz São Paulo"
  ipv4: string;
  ipv6: string;
  anydesk: string;
  dw: string;
  mac: string;
}

// Interfaces para tipos e sedes, ajusta conforme seu backend
interface Sede {
  idsede: number;
  sedenome: string;
}

interface TipoEq {
  idtipoeq: number;
  tipoeqnome: string;
}

export async function getSedes(): Promise<Sede[]> {
  const res = await fetch("https://laudinho.cleversystems.net/api/sede");
  if (!res.ok) throw new Error("Erro ao buscar sedes");
  return res.json();
}

export async function getTipos(): Promise<TipoEq[]> {
  const res = await fetch("https://laudinho.cleversystems.net/api/tipoeq/listarTipoEquipamento");
  if (!res.ok) throw new Error("Erro ao buscar tipos");
  return res.json();
}

// Buscar equipamentos do backend
export async function getEquipamentos(): Promise<Equipamento[]> {
  const res = await fetch("https://laudinho.cleversystems.net/api/equipamento");
  if (!res.ok) throw new Error("Erro ao buscar equipamentos");
  const equipamentosRaw = await res.json();

    return equipamentosRaw.map((e: any) => ({
    id: e.idequipamento,
    nome: e.equipamentomodelo || "",
    serie: e.equipamentoserie || "",
    tipo: e.tipoeq?.tipoeqnome || "",
    alugado: e.equipamentoalugado ? "Sim" : "Não",
    sede: e.sede?.sedenome || "",
    modelo: e.equipamentomodelo || "",
    ipv4: e.equipamentoipv4 || "",
    ipv6: e.equipamentoipv6 || "",
    anydesk: e.equipamentoanydesk || "",
    dw: e.equipamentodw || "",
    mac: formatarMac(e.equipamentomac || "")
  }));
}

// Função para formatar MAC no padrão "AA:BB:CC:DD:EE:FF"
function formatarMac(macRaw: string): string {
  // pode receber string sem ':', então insere
  return macRaw.match(/.{1,2}/g)?.join(":").toUpperCase() || macRaw;
}

// Criar equipamento: converte texto para ids e envia ao backend
export async function addEquipamento(e: Equipamento): Promise<void> {
  const sedes = await getSedes();
  const tipos = await getTipos();

  const sede = sedes.find(s => s.sedenome.toLowerCase() === e.sede.toLowerCase());
  const tipo = tipos.find(t => t.tipoeqnome.toLowerCase() === e.tipo.toLowerCase());

  if (!sede) throw new Error(`Sede "${e.sede}" não encontrada`);
  if (!tipo) throw new Error(`Tipo "${e.tipo}" não encontrado`);

  const payload = {
    equipmodel: e.modelo,
    equipserie: e.serie,
    equipmac: e.mac.replace(/:/g, "").toUpperCase(),
    equipipv4: e.ipv4,
    equipipv6: e.ipv6,
    equipanydesk: e.anydesk,
    equipdwservice: e.dw,
    equipalugado: e.alugado.toLowerCase() === "sim",
    idsede: sede.idsede,
    idtipoeq: tipo.idtipoeq
  };

  const res = await fetch("https://laudinho.cleversystems.net/api/equipamento/criarEquipamento", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error("Erro ao criar equipamento: " + errorText);
  }
}

export async function updateEquipamento(id: number, e: Equipamento): Promise<void> {
  const sedes = await getSedes();
  const tipos = await getTipos();

  const sede = sedes.find(s => s.sedenome.toLowerCase() === e.sede.toLowerCase());
  const tipo = tipos.find(t => t.tipoeqnome.toLowerCase() === e.tipo.toLowerCase());

  if (!sede) throw new Error(`Sede "${e.sede}" não encontrada`);
  if (!tipo) throw new Error(`Tipo "${e.tipo}" não encontrado`);

  const payload = {
    equipserie: e.serie,
    equipmodel: e.modelo,
    equipmac: e.mac.replace(/:/g, "").toUpperCase(),
    equipipv4: e.ipv4,
    equipipv6: e.ipv6,
    equipanydesk: e.anydesk,
    equipdwservice: e.dw,
    equipalugado: e.alugado.toLowerCase() === "sim",
    idsede: sede.idsede,
    idtipoeq: tipo.idtipoeq
  };

  const res = await fetch(`https://laudinho.cleversystems.net/api/equipamento/${id}`, {
    method: "PUT", // ou PATCH dependendo do seu backend
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error("Erro ao atualizar equipamento: " + errorText);
  }
}

export async function deleteEquipamento(id: number): Promise<void> {
  const res = await fetch(`https://laudinho.cleversystems.net/api/equipamento/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error("Erro ao deletar equipamento: " + errorText);
  }
}
