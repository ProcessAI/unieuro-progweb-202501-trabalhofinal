const API_URL = 'http://localhost:3000'; 

export interface Tipoeq {
  idtipoeq: number;
  tipoeqnome: string;
}

export async function fetchTipoeqs(): Promise<Tipoeq[]> {
  const res = await fetch(`${API_URL}/tipoeq`);
  return res.json();
}

export async function createTipoeq(tipoeqnome: string): Promise<Tipoeq> {
  const res = await fetch(`${API_URL}/tipoeq`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tipoeqnome }),
  });
  return res.json();
}

export async function updateTipoeq(idtipoeq: number, tipoeqnome: string): Promise<Tipoeq> {
  const res = await fetch(`${API_URL}/tipoeq/${idtipoeq}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tipoeqnome }),
  });
  return res.json();
}

export async function deleteTipoeq(idtipoeq: number): Promise<void> {
  await fetch(`${API_URL}/tipoeq/${idtipoeq}`, { method: 'DELETE' });
}
