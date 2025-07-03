import * as yup from 'yup';

export const tipoEquipamentoSchema = yup.object({
  tipoeqnome: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ0-9 ]+$/, 'Somente letras e números são permitidos')
    .required('Campo obrigatório'),
});
