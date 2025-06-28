import { LaudoPersistence,LaudoWithImages } from '../persistence/laudo-persistence';

const persistence = new LaudoPersistence();

export const create = async (data: {
  laudodescricao: string;
  laudohtmlmd: string;
  idtipolaudo: number;
  idtipoinstalacao: number;
  laudoosclickup?: string | null;
  laudostatus: number;
  imagens?: Record<string, string>; 
}) => {
  if (!data.idtipolaudo || data.idtipolaudo === 0) {
    throw new Error('Tipo de laudo inválido');
  }

  if (!data.idtipoinstalacao || data.idtipoinstalacao === 0) {
    throw new Error('Tipo de instalação inválido');
  }


  //add images to the end 

  data.laudohtmlmd = data.laudohtmlmd || '';
data.laudohtmlmd = data.laudohtmlmd || '';

if (data.imagens && Object.keys(data.imagens).length > 0) {
  const imagensMarkdown = Object.entries(data.imagens)
    .map(([key, value]) => `![${key}](data:image/png;base64,${value})`)
    .join('\n\n');

  data.laudohtmlmd += `\n\n<!--START IMAGES-->\n\n${imagensMarkdown}\n\n<!--END IMAGES-->`;
}

  return await persistence.create({
    laudodescricao: data.laudodescricao,
    laudohtmlmd: data.laudohtmlmd,
    tipolaudo: { connect: { idtipolaudo: data.idtipolaudo } },
    tipoinstalacao: { connect: { idtipoinstalacao: data.idtipoinstalacao } },
    laudoosclickup: data.laudoosclickup ?? null,
    laudostatus: data.laudostatus, 
  });
};


export const findAll = async () => {
  const laudos =  await persistence.findAll();
  //Isso é um hack maléfico, esta a enviar todas as imagens de todos os laudos para o frontend
  // se vc tiver 500 laudos, com 100 imagens cada, vai ser 50.000 imagens, tudo ao mesmo tempo no frontend
  return laudos;
};

export const findById = async (id: number) => {
  const laudo = await persistence.findById(id);
  if (!laudo) {
    throw new Error('Laudo não encontrado');
  }
  return laudo ;
}
export const update = async (
  id: number,
  data: {
    laudodescricao?: string;
    laudohtmlmd?: string;
    idtipolaudo?: number;
    idtipoinstalacao?: number;
    laudoosclickup?: string | null;
    laudofechamento?: Date | null;
    laudostatus?: number;
    imagens?: Record<string, string>;
  }
) => {

  if (data.imagens && Object.keys(data.imagens).length > 0) {
    const imagensHtml = Object.entries(data.imagens)
      .map(([key, value]) => `![${key}](data:image/png;base64,${value})`)
      .join('\n');
    data.laudohtmlmd = (data.laudohtmlmd || '') + `\n\n${imagensHtml}`;
  }
  return await persistence.update(id, data);
};

export const deleteLaudo = async (id: number) => {
  return await persistence.delete(id);
};
