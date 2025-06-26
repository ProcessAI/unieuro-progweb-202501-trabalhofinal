const API_BASE_URL = 'http://localhost:8080/api';

export interface Laudo {
  idlaudo: number;
  laudodescricao: string;
  laudohtmlmd: string;
  laudodatainclusao: string;
  laudofechamento?: string | Date | null;
  laudostatus: number;
  idtipolaudo: number;
  idtipoinstalacao: number;
  laudoosclickup?: string | null;
}

export async function listarLaudos(): Promise<Laudo[]> {
  const response = await fetch(`${API_BASE_URL}/laudos`);
  if (!response.ok) throw new Error('Erro ao buscar laudos');
  return response.json();
}

export async function buscarLaudoPorId(idlaudo: number): Promise<Laudo> {
  const response = await fetch(`${API_BASE_URL}/laudos/${idlaudo}`);
  if (!response.ok) throw new Error('Erro ao buscar o laudo');
  return response.json();
}

export async function criarLaudo(laudo: Omit<Laudo, 'idlaudo' | 'laudodatainclusao'>): Promise<Laudo> {
  const response = await fetch(`${API_BASE_URL}/laudos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(laudo),
  });
  if (!response.ok) throw new Error('Erro ao criar laudo');
  return response.json();
}

export async function atualizarLaudo(idlaudo: number, laudo: Partial<Laudo>): Promise<Laudo> {
  const response = await fetch(`${API_BASE_URL}/laudos/${idlaudo}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(laudo),
  });
  if (!response.ok) throw new Error('Erro ao atualizar laudo');
  return response.json();
}

export async function deletarLaudo(idlaudo: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/laudos/${idlaudo}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erro ao deletar laudo');
}
