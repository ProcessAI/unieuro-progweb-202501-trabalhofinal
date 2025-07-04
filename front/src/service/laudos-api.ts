const API_BASE_URL = 'https://laudinho.cleversystems.net/api/laudos';

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

export interface LaudoWithImages extends Laudo {
  imagens: Record<string, string>;
}

export async function listarLaudos(): Promise<LaudoWithImages[]> {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) throw new Error('Erro ao buscar laudos');
  return response.json();
}

export async function buscarLaudoPorId(idlaudo: number): Promise<LaudoWithImages> {
  const response = await fetch(`${API_BASE_URL}/${idlaudo}`);
  if (!response.ok) throw new Error('Erro ao buscar o laudo');
  return response.json();
}

export async function criarLaudo(laudo: Omit<Laudo, 'idlaudo' | 'laudodatainclusao'>): Promise<LaudoWithImages> {
  const response = await fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(laudo),
  });
  if (!response.ok) throw new Error('Erro ao criar laudo');
  return response.json();
}

export async function atualizarLaudo(idlaudo: number, laudo: Partial<LaudoWithImages>): Promise<LaudoWithImages> {
  const response = await fetch(`${API_BASE_URL}/${idlaudo}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(laudo),
  });
  if (!response.ok) throw new Error('Erro ao atualizar laudo');
  return response.json();
}

export async function deletarLaudo(idlaudo: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/${idlaudo}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erro ao deletar laudo');
}
