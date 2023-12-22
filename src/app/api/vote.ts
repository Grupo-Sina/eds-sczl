import { api } from "./../services/api";
import { AxiosError } from "axios";

export const requestVote = async (data: VoteProps) => {
  try {
    const res = await api.post(`/answer`, data);
    return { data: res.data };
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        error: err?.response?.data.message
          ? err?.response?.data.message
          : "Erro desconhecido, tente novamente mais tarde.",
      };
    }
  }
};
