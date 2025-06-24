const API_BASE_URL = 'http://localhost:3000';

export interface Laudo {
  id: number;
  nome: string;
  descricao: string;
  data: string;
  // Adicione aqui os outros campos conforme necessário
}

export async function listarLaudos(): Promise<Laudo[]> {
  const response = await fetch(`${API_BASE_URL}/laudos`);
  if (!response.ok) throw new Error('Erro ao buscar laudos');
  return response.json();
}

export async function buscarLaudoPorId(id: number): Promise<Laudo> {
  const response = await fetch(`${API_BASE_URL}/laudos/${id}`);
  if (!response.ok) throw new Error('Erro ao buscar o laudo');
  return response.json();
}

export async function criarLaudo(laudo: Omit<Laudo, 'id'>): Promise<Laudo> {
  const response = await fetch(`${API_BASE_URL}/laudos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(laudo),
  });
  if (!response.ok) throw new Error('Erro ao criar laudo');
  return response.json();
}

export async function atualizarLaudo(id: number, laudo: Partial<Laudo>): Promise<Laudo> {
  const response = await fetch(`${API_BASE_URL}/laudos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(laudo),
  });
  if (!response.ok) throw new Error('Erro ao atualizar laudo');
  return response.json();
}

export async function deletarLaudo(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/laudos/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erro ao deletar laudo');
}
