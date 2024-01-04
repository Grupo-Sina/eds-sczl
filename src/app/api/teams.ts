import { api } from '../services/api'
import { AxiosError } from 'axios'

export const requestTeamsAndVotes = async () => {
  try {
    const res = await api.get('/teams')
    // console.log(res.data.times)
    return res.data.times
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
