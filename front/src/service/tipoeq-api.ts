const API_URL = 'http://localhost:5000';

export interface Tipoeq {
  idtipoeq: number;
  tipoeqnome: string;
}

export async function fetchTipoeqs(): Promise<Tipoeq[]> {
  try {
    const res = await fetch(`${API_URL}/tipoeq`);
    if (!res.ok) throw new Error('Erro ao buscar tipos de equipamento');
    return await res.json();
  } catch (error) {
    console.error('Erro em fetchTipoeqs:', error);
    return [];
  }
}

export async function createTipoeq(tipoeqnome: string): Promise<Tipoeq | null> {
  try {
    const res = await fetch(`${API_URL}/tipoeq`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipoeqnome }),
    });
    if (!res.ok) throw new Error('Erro ao criar tipo de equipamento');
    return await res.json();
  } catch (error) {
    console.error('Erro em createTipoeq:', error);
    return null;
  }
}

export async function updateTipoeq(idtipoeq: number, tipoeqnome: string): Promise<Tipoeq | null> {
  try {
    const res = await fetch(`${API_URL}/tipoeq/${idtipoeq}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipoeqnome }),
    });
    if (!res.ok) throw new Error('Erro ao atualizar tipo de equipamento');
    return await res.json();
  } catch (error) {
    console.error('Erro em updateTipoeq:', error);
    return null;
  }
}

export async function deleteTipoeq(idtipoeq: number): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/tipoeq/${idtipoeq}`, { method: 'DELETE' });
    return res.ok;
  } catch {
    return false;
  }
}
