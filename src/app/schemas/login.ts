import * as yup from 'yup'

export const schemaLogin = yup
  .object({
    userName: yup.string().required('Campo Usuário é obrigatório.'),
    password: yup.string().required('Campo Senha é obrigatório.'),
  })
  .required()

export const inputListLogin = [
  {
    title: 'Usuário',
    name: 'userName',
    type: 'text',
    isRequired: true,
  },
  {
    title: 'Senha',
    name: 'password',
    type: 'password',
    isRequired: true,
  },
]
