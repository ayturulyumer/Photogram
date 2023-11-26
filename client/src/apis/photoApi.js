const baseUrl = "http://localhost:3030/data/photos";
import * as request from "../lib/request.js";

export const getAll = async () => {
  const photos = await request.get(baseUrl);
  console.log(photos)
  return Object.values(photos);
};

export const getSingle = async (id) => {
  const photo = await request.get(`${baseUrl}/${id}`);
  return photo;
};
