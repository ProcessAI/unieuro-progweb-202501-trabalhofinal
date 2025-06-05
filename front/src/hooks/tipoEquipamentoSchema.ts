import * as yup from 'yup';

export const tipoEquipamentoSchema = yup.object({
  tipoeqnome: yup
    .string()
    .matches(/^[a-zA-Z0-9\s]+$/, 'Somente letras e números são permitidos')
    .required('Campo obrigatório'),
});
