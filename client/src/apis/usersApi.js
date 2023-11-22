const baseUrl = "http://localhost:3030/jsonstore/users";
import * as request from "../../../lib/request.js";

export const login = async (data) => {
  const result = request.post(`${baseUrl}/login`, data);
  return result;
}

export const register = async (data) => {
  const result = await request.post(`${baseUrl}/register`, data);
  return result;
};


