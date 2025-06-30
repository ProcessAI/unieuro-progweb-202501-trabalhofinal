const API_URL = 'https://laudinho.cleversystems.net/api/tipo-instalacao';

interface TipoInstalacaoPayload {
  tipoinstalacaonome: string;
}

export const getTiposInstalacao = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTipoInstalacao = async (data: TipoInstalacaoPayload) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const updateTipoInstalacao = async (id: number, data: TipoInstalacaoPayload) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const deleteTipoInstalacao = async (id: number) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
