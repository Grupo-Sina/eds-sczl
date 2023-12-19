import * as yup from 'yup'
import { phoneRegExp } from '../util/phoneRegex'

export const schemaRegisterUser = yup
  .object({
    fullName: yup.string().required('Campo Nome Completo é obrigatório.'),
    phone: yup
      .string()
      .required('Campo Celular é obrigatório.')
      .matches(phoneRegExp, 'Insira um telefone válido.'),
    userName: yup.string().required('Campo Usuário é obrigatório.'),
    password: yup.string().required('Campo Senha é obrigatório.'),
    confirmPassword: yup
      .string()
      .required('A confirmação de senha é obrigatória.')
      .oneOf([yup.ref('password'), null], 'As senhas não coincidem.'),
  })
  .required()

export const inputList = [
  {
    title: 'Nome Completo',
    name: 'fullName',
    type: 'text',
    isRequired: true,
  },
  {
    title: 'Celular',
    name: 'phone',
    type: 'text',
    isRequired: true,
  },
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
  {
    title: 'Confirmar Senha',
    name: 'confirmPassword',
    type: 'password',
    isRequired: true,
  },
]
