import { createClient } from "pexels";
import * as request from "../lib/request.js";
const pexelsKey = import.meta.env.VITE_APP_PEXELS_KEY;


const client = createClient(pexelsKey);

export const getPhotos = async (query) => {
  const result = await client.photos.search({ query, per_page: 8, page: 1 });
  return result;
};

// I'm not using my request util because i get CORS Blocked by backend i guess
export const loadMore = async (url) => {
  const response = await fetch(url, {
    headers: {
      Authorization: pexelsKey,
    },
  });
  const result = await response.json()
  return result
};
