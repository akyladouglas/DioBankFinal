import { api } from "./api";

export const Login = async (email: string): Promise<void> => {
  const response: any = await api;
  if (email !== response?.email) return alert("Email inválido");
  alert(`Bem Vindo ${email}!`);
};
