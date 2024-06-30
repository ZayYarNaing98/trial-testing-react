import { baseURL } from "./../config/axios";
import api from "./../config/axios";
const loginUrl = "api/auth/login";
const registerUrl = "api/auth/register";

export const login = async (body: any) => {
  return await api.post(`${baseURL}/${loginUrl}`, body);
};

export const register = async (body: any) => {
  return await api.post(`${baseURL}/${registerUrl}`, body);
};
