import { api } from '../services/api'
import { AxiosError } from 'axios'

type ValidateCodeProps = {
  code: string
  userId: string
}

type ResendCodeProps = {
  userId: string
}

export const login = async (data: LoginProps) => {
  try {
    const res = await api.post(`/sessions`, data)
    return { data: res.data }
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        error: err?.response?.data.message
          ? err?.response?.data.message
          : 'Erro desconhecido, tente novamente mais tarde.',
      }
    }
  }
}

export const registerUser = async (data: RegisterUserProps) => {
  try {
    const res = await api.post(`/accounts`, data)
    return { data: res.data }
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        error: err?.response?.data.message
          ? err?.response?.data.message
          : 'Erro desconhecido, tente novamente mais tarde.',
      }
    }
  }
}

export const validateCode = async (data: ValidateCodeProps) => {
  try {
    const res = await api.post(`/validate-code`, data)
    return { data: res.data }
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        error: err?.response?.data.message
          ? err?.response?.data.message
          : 'Erro desconhecido, tente novamente mais tarde.',
      }
    }
  }
}

export const resendCode = async (data: ResendCodeProps) => {
  try {
    const res = await api.post(`/resend-code`, data)

    return { data: res.status }
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        error: err?.response?.data.message
          ? err?.response?.data.message
          : 'Erro desconhecido, tente novamente mais tarde.',
      }
    }
  }
}

export const sendCodeResetPassword = async (
  data: SendCodeResetPasswordProps,
) => {
  try {
    const res = await api.post(`/send-code-reset-password`, data)

    return { data: res.data }
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        error: err?.response?.data.message
          ? err?.response?.data.message
          : 'Erro desconhecido, tente novamente mais tarde.',
      }
    }
  }
}

export const resetPassword = async (data: ResetPasswordProps) => {
  try {
    const res = await api.post(`/reset-password`, data)

    return { data: res.status }
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        error: err?.response?.data.message
          ? err?.response?.data.message
          : 'Erro desconhecido, tente novamente mais tarde.',
      }
    }
  }
}
