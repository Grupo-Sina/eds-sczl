import * as yup from 'yup'
import { phoneRegExp } from '../utils/phoneRegex'

export const schemaSendCodeResetPassword = yup
  .object({
    phone: yup
      .string()
      .required('Campo Celular é obrigatório.')
      .matches(phoneRegExp, 'Insira um telefone válido.'),
  })
  .required()

export const schemaResetPassword = yup
  .object({
    code: yup
      .string()
      .required('Código precisa ser digitado')
      .test(
        'len',
        'São necessários 6 caracteres',
        (val) => val?.toString().length === 4,
      ),
    password: yup.string().required('Campo Senha é obrigatório.'),
    confirmPassword: yup
      .string()
      .required('A confirmação de senha é obrigatória.')
      .oneOf([yup.ref('password')], 'As senhas não coincidem.'),
  })
  .required()

export const inputList = [
  {
    title: 'Nova Senha',
    name: 'password',
    type: 'password',
    isRequired: true,
  },
  {
    title: 'Confirmar nova senha',
    name: 'confirmPassword',
    type: 'password',
    isRequired: true,
  },
]
