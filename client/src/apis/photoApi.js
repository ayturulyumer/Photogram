const baseUrl = "http://localhost:3030/jsonstore/photos";
import * as request from "../../../lib/request.js";

export const getAll = async () => {
  const photos = await request.get(baseUrl);
  return Object.values(photos);
};

export const getSingle = async (id) => {
  const photo = await request.get(`${baseUrl}/${id}`);
  return photo;
};
