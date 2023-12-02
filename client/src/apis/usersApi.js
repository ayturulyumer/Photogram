const baseUrl = "http://localhost:3030/users";
const collection = "http://localhost:3030/data/profiles";
import * as request from "../lib/request.js";

export const login = async (data) => {
  const result = request.post(`${baseUrl}/login`, data);
  return result;
};

export const register = async (data) => {
  const result = await request.post(`${baseUrl}/register`, data);
  return result;
};

export const logout = async () => {
  request.post(`${baseUrl}/logout`);
};

export const createProfile = async (data) => {
  const result = request.post(collection, data);
  return result;
};

{/**Couldn't do it with patch had some CORS POLICY BLOCK / SO ILL DO IT WITH PUT */}
export const updateProfile = async (id, data) => {
  const result = await request.put(`${collection}/${id}`,data);
  return result;
};
