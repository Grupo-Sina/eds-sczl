import * as yup from 'yup'

export const schemaVote = yup
  .object({
    name: yup.string().required('Campo Nome do time é obrigatório.'),
  })
  .required()
