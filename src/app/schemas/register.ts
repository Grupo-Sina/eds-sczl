import * as yup from 'yup'
import { phoneRegExp } from '../utils/phoneRegex'
import { usernameRegexValidation } from '../utils/userNameRegex'

export const schemaRegisterUser = yup
  .object({
    fullName: yup.string().required('Campo Nome Completo é obrigatório.'),
    phone: yup
      .string()
      .required('Campo Celular é obrigatório.')
      .matches(phoneRegExp, 'Insira um telefone válido.'),
    userName: yup.string().required('Campo Usuário é obrigatório.').matches(usernameRegexValidation, 'O formato válido para username são números, letras minúsculas, ponto e sublinhado.'),
    password: yup.string().required('Campo Senha é obrigatório.'),
    confirmPassword: yup
      .string()
      .required('A confirmação de senha é obrigatória.')
      .oneOf([yup.ref('password')], 'As senhas não coincidem.'),
    email: yup.string().email('Insira um e-mail válido.'),
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
    placeholder: '(DDD) 99999-9999',
  },
  {
    title: 'Email',
    name: 'email',
    type: 'text',
    isRequired: false,
    placeholder: 'Preenchimento não obrigatório',
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
