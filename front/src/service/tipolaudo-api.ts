const API_URL = 'http://localhost:5173/tipolaudo';

interface TipoLaudoPayload {
  tipolaudonome: string;
  tipolaudotemplate?: string;
}

export const getTiposLaudo = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTipoLaudo = async (data: TipoLaudoPayload) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const updateTipoLaudo = async (id: number, data: TipoLaudoPayload) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const deleteTipoLaudo = async (id: number) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
