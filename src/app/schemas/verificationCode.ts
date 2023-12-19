import * as yup from 'yup'

export type VerificationCodeFormProps = {
  code: string
}

export const schema = yup
  .object({
    code: yup
      .string()
      .required('Código precisa ser digitado')
      .test(
        'len',
        'São necessários 6 caracteres',
        (val) => val?.toString().length === 4,
      ),
  })
  .required()
