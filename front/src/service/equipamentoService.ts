export interface Equipamento {
  nome: string;
  serie: string;
  tipo: string;
  alugado: string;
  sede: string;
  modelo: string;
  ipv4: string;
  ipv6: string;
  anydesk: string;
  dw: string;
  mac: string;
}

let dados: Equipamento[] = [
  {
    nome: "capacete", serie: "EQP-0001", tipo: "Gerador Diesel",
    alugado: "Sim", sede: "Águas Claras", modelo: "Modelo A",
    ipv4: "192.168.1.1", ipv6: "::1", anydesk: "123 456 789",
    dw: "01/01/2023", mac: "AA:BB:CC:DD:EE:FF"
  }
];

export async function getEquipamentos(): Promise<Equipamento[]> {
  return [...dados];
}

export async function addEquipamento(e: Equipamento): Promise<void> {
  dados.push(e);
}

export async function updateEquipamento(index: number, e: Equipamento): Promise<void> {
  dados[index] = e;
}

export async function deleteEquipamento(index: number): Promise<void> {
  dados.splice(index, 1);
}