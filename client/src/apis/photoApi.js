const baseUrl = "http://localhost:3030/data/photos";
import * as request from "../lib/request.js";

export const create = async (data) => {
  await request.post(baseUrl, data);
};

export const getAll = async () => {
  const photos = await request.get(baseUrl);
  return Object.values(photos);
};

export const getSingle = async (id) => {
  const photo = await request.get(`${baseUrl}/${id}`);
  return photo;
};

export const remove = async (id) => {
  await request.del(`${baseUrl}/${id}`);
};

export const update = async (id,data) => {
  const result = await request.put(`${baseUrl}/${id}`,data);
  return result;
};
