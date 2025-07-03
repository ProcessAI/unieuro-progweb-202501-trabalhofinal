const API_URL = "https://laudinho.cleversystems.net/api/tipoeq";

export interface Tipoeq {
  idtipoeq: number;
  tipoeqnome: string;
  status: "ativo" | "inativo"; // Adicione esta linha
}

export async function fetchTipoeqs(): Promise<Tipoeq[]> {
  try {
    const res = await fetch(`${API_URL}/listarTipoEquipamento`);
    if (!res.ok) throw new Error('Erro ao buscar tipos de equipamento');
    return await res.json();
  } catch (error) {
    console.error('Erro em fetchTipoeqs:', error);
    return [];
  }
}

export async function createTipoeq(tipoeqnome: string): Promise<Tipoeq | null> {
  try {
    const res = await fetch(`${API_URL}/criarTipoEquipamento`, {
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

export async function updateTipoeq(idtipoeq: number, tipoeqnome: string, status: "ativo" | "inativo"): Promise<Tipoeq | null> {
  try {
    const res = await fetch(`${API_URL}/atualizarTipoEquipamento/${idtipoeq}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipoeqnome, status }),
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
    const res = await fetch(`${API_URL}/deletarTipoEquipamento/${idtipoeq}`, { method: 'DELETE' });
    return res.ok;
  } catch {
    return false;
  }
}
